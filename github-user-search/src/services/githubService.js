import axios from "axios";
export default async function fetchUserData(username, location, minRepos) {
  let query = "";

  if (username) {
    query += `${username}`;
  }
  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`)
    return response.data.items;
  }
  catch (error) {
    console.log(error);
    throw error;
  }
}
