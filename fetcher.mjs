import fetch from "node-fetch";
import "dotenv/config";
import fs from "fs";

const githubConvertedToken = process.env.ACTIONS_DEPLOY_ACCESS_TOKEN || "Your Github Token Here";
const githubUserName = process.env.USERNAME_GIT || "Your Github Username Here";
const mediumUserName = process.env.MEDIUM_USERNAME || "Your Medium Username Here";

if (!githubUserName || !githubConvertedToken) {
  console.log("Skipping GitHub Data!\n");
} else {
  const baseUrl = "https://api.github.com/graphql";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `bearer ${githubConvertedToken}`,
  }; 
  
  const queries = {
    user: `
      query {
        user(login: "${githubUserName}") { 
          name
          bio
          isHireable
          location
          avatarUrl
        }
      }
    `,
    pullRequests: `
      query {
        user(login: "${githubUserName}") {
          pullRequests(last: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
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
      }
    `,
    issues: `
    query{

      user(login: "${githubUserName}") {
      issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
        totalCount
        nodes{
          id
          closed
          title
          createdAt
          url
          number
          assignees(first:100){
            nodes{
              avatarUrl
              name
              url
            }
          }
          repository{
            name
            url
            owner{
              login
              avatarUrl
              url
            }
          }
        }
      }
    }
    }
    `,
    organization: `
      query{
        user(login: "${githubUserName}") {
            repositoriesContributedTo(last: 100){
              totalCount
              nodes{
               owner{
                  login
                  avatarUrl
                  __typename
               }
              }
            }
          }
       }
      `,
    pinnedProjects: `query { 
      user(login: "${githubUserName}") { 
        pinnedItems(first: 6, types: REPOSITORY) {
          totalCount
          nodes{
            ... on Repository{
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
                languages(first:10){
                  nodes{
                    name
                  }
                }
            }
          }
        }
      }
    }
  `
  };

  const fetchData = async (query, fileName) => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();
  
      if (data.errors) {
        console.error(data.errors);
        return;
      }
  
      if (!data.data || !data.data.user) {
        console.error("User data not found. Full response:", data);
        return;
      }
  
      fs.writeFileSync(`./src/shared/opensource/${fileName}`, JSON.stringify(data.data, null, 2));
      console.log(`Fetching ${fileName.replace('.json', '').replace(/_/g, ' ')} Data.\n`);
    } catch (error) {
      console.error(`Error fetching ${fileName}:`, error);
    }
  };

  const checkUserExists = async () => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ query: `query { user(login: "${githubUserName}") { id } }` }),
      });
  
      const data = await response.json();
  
      if (data.errors) {
        console.error("User does not exist or token is invalid. Errors:", data.errors);
        return false;
      }
  
      return true;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };
  
  // In your main function
  const fetchUserData = async () => {
    const userExists = await checkUserExists();
    if (!userExists) {
      console.log("Skipping GitHub Data due to user not existing or token issues.");
      return;
    }
  
    await fetchData(queries.user, 'user.json');
    await fetchData(queries.pullRequests, 'pull_requests.json');
    // Add calls for other queries...
  };
  
  fetchUserData();

  fetchUserData();
}

const mediumUrl = `http://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`;

const fetchMediumBlogs = async () => {
  if (!mediumUserName) {
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