import axios from "axios";
export default async function fetchUserData(name) {
  try {
    const data = axios.get(`https://api.github.com/users/${name}`)
    return data;
  }
  catch (error) {
    console.log(error);
    throw error;
  }
}
