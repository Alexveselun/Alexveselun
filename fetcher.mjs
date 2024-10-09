import fetch from "node-fetch";
import "dotenv/config";
import fs from "fs";

const githubConvertedToken = process.env.ACTIONS_DEPLOY_ACCESS_TOKEN;
const githubUserName = process.env.USERNAME_GIT;
const mediumUserName = process.env.MEDIUM_USERNAME;

if (!githubUserName || !githubConvertedToken) {
  console.log("Skipping GitHub Data!\n");
} else {
  const baseUrl = "https://api.github.com/graphql";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `bearer ${githubConvertedToken}`,
  };

  //Define GraphQL queries
  const queries = {
    user: `query {
      user(login: "${githubUserName}") {
        name
        bio
        isHireable
        location
        avatarUrl
      }
    }`,
    pullRequests: `query {
      user(login: "${githubUserName}") {
        pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          nodes {
            id
            title
            url
            state
            mergedBy {
              avatarUrl
              url
              login
            }
            createdAt
            number
            changedFiles
            additions
            deletions
            baseRepository {
              name
              url
              owner {
                avatarUrl
                login
                url
              }
            }
          }
        }
      }
    }`,
    issues: `query {
      user(login: "${githubUserName}") {
        issues(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          nodes {
            id
            closed
            title
            createdAt
            url
            number
            assignees(first: 100) {
              nodes {
                avatarUrl
                name
                url
              }
            }
            repository {
              name
              url
              owner {
                login
                avatarUrl
                url
              }
            }
          }
        }
      }
    }`,
    organizations: `query {
      user(login: "${githubUserName}") {
        repositoriesContributedTo(last: 100) {
          totalCount
          nodes {
            owner {
              login
              avatarUrl
              __typename
            }
          }
        }
      }
    }`,
    pinnedProjects: `query {
      user(login: "${githubUserName}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          totalCount
          nodes {
            ... on Repository {
              id
              name
              createdAt
              url
              description
              isFork
              forkCount
              stargazers {
                totalCount
              }
              languages(first: 10) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }`,
  };

  const fetchData = async (query, filename, processData) => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (data.errors) {
        console.error("Error fetching data:", data.errors);
        return;
      }

      const processedData = processData(data.data);
      fs.writeFileSync(`./src/shared/opensource/${filename}`, JSON.stringify(processedData, null, 2));
      console.log(`Fetched and saved ${filename}\n`);
    } catch (error) {
      console.error(`Error fetching ${filename}:`, error);
    }
  };

  //GitHub Data processing functions
  const processUserData = (data) => ({ data: data.user });
  
  const processPullRequests = (data) => {
    const pullRequests = data.user.pullRequests.nodes;
    const open = pullRequests.filter(pr => pr.state === "OPEN").length;
    const closed = pullRequests.filter(pr => pr.state === "CLOSED").length;
    const merged = pullRequests.filter(pr => pr.state === "MERGED").length;

    return {
      data: pullRequests,
      open,
      closed,
      merged,
      totalCount: pullRequests.length,
    };
  };

  const processIssues = (data) => {
    const issues = data.user.issues.nodes;
    const open = issues.filter(issue => !issue.closed).length;
    const closed = issues.filter(issue => issue.closed).length;

    return {
      data: issues,
      open,
      closed,
      totalCount: issues.length,
    };
  };

  const processOrganizations = (data) => {
    const organizations = data.user.repositoriesContributedTo.nodes
      .map(node => node.owner)
      .filter(owner => owner.__typename === "Organization");

    return { data: [...new Set(organizations.map(org => JSON.stringify(org)))].map(org => JSON.parse(org)) };
  };

  const processPinnedProjects = (data) => {
    const languagesIcons = {
      Python: "logos-python",
      HTML: "logos-html-5",
      CSS: "logos-css-3",
      JavaScript: "logos-javascript",
      Java: "logos-java",
      Shell: "simple-icons:shell",
      Dockerfile: "simple-icons:docker",
    };

    return {
      data: data.user.pinnedItems.nodes.map(project => {
        const languages = project.languages.nodes.map(lang => ({
          name: lang.name,
          iconifyClass: languagesIcons[lang.name] || ""
        }));
        return { ...project, languages };
      }),
    };
  };

  (async () => {
    await fetchData(queries.user, "user.json", processUserData);
    await fetchData(queries.pullRequests, "pull_requests.json", processPullRequests);
    await fetchData(queries.issues, "issues.json", processIssues);
    await fetchData(queries.organizations, "organizations.json", processOrganizations);
    await fetchData(queries.pinnedProjects, "projects.json", processPinnedProjects);
  })();
}

//Fetch Medium blogs
const mediumUrl = `http://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`;

const fetchMediumBlogs = async () => {
  if (!mediumUserName || mediumUserName === undefined) {
    console.log("Skipping Medium Data!\n");
    return;
  }

  try {
    console.log("Fetching Medium Blogs.\n");
    const response = await fetch(mediumUrl);
    const data = await response.json();
    fs.writeFileSync("./src/shared/blogs.json", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error fetching Medium Blogs:", error);
  }
};

fetchMediumBlogs();