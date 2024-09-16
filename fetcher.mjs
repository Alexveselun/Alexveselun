import fetch from "node-fetch";
import "dotenv/config";
import fs from "fs";

// Use environment variables or defaults if missing
const githubConvertedToken = process.env.ACTIONS_DEPLOY_ACCESS_TOKEN || "Your Github Token Here";
const githubUserName = process.env.USERNAME_GIT || "Your Github Username Here";
const mediumUserName = process.env.MEDIUM_USERNAME || "Your Medium Username Here";

if (!githubUserName || !githubConvertedToken) {
  console.log("Skipping GitHub Data due to missing credentials!\n");
} else {
  const baseUrl = "https://api.github.com/graphql";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + githubConvertedToken,
  };

  const fetchGraphQL = async (query, fileName) => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(query),
      });
      const data = await response.json();
      if (data.errors) {
        console.error("GraphQL errors:", data.errors);
      } else {
        fs.writeFileSync(fileName, JSON.stringify(data), (err) => {
          if (err) {
            console.error("File write error:", err);
          }
        });
        console.log(`Fetched and saved data to ${fileName}`);
      }
    } catch (error) {
      console.error(`Error fetching ${fileName}:`, error);
    }
  };

  const queries = {
    user: {
      query: `
      query {
        user(login: "${githubUserName}") { 
          name
          bio
          isHireable
          location
          avatarUrl
        }
      }`,
    },
    pullRequests: {
      query: `
      query {
        user(login: "${githubUserName}") {
          pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
            totalCount
            nodes {
              id
              title
              url
              state
              createdAt
              number
              additions
              deletions
              baseRepository {
                name
                url
              }
            }
          }
        }
      }`,
    },
    issues: {
      query: `
      query {
        user(login: "${githubUserName}") {
          issues(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
            totalCount
            nodes {
              id
              title
              createdAt
              url
              state
            }
          }
        }
      }`,
    },
    pinnedProjects: {
      query: `
      query {
        user(login: "${githubUserName}") { 
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                url
                description
              }
            }
          }
        }
      }`,
    },
  };

  const fetchGitHubData = async () => {
    await fetchGraphQL(queries.user, "./src/shared/opensource/user.json");
    await fetchGraphQL(queries.pullRequests, "./src/shared/opensource/pull_requests.json");
    await fetchGraphQL(queries.issues, "./src/shared/opensource/issues.json");
    await fetchGraphQL(queries.pinnedProjects, "./src/shared/opensource/projects.json");
  };

  fetchGitHubData();
}

const mediumUrl = `http://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`;

if (mediumUserName) {
  const fetchMediumData = async () => {
    try {
      const response = await fetch(mediumUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      fs.writeFileSync("./src/shared/blogs.json", JSON.stringify(data), (err) => {
        if (err) {
          console.error("File write error:", err);
        }
      });
      console.log("Fetched Medium blog data.");
    } catch (error) {
      console.error("Error fetching Medium blogs:", error);
    }
  };

  fetchMediumData();
} else {
  console.log("Skipping Medium Data!\n");
}
