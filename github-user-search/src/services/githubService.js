export default async function fetchUserData(name) {
  try {
    const res = await fetch(`https://api.github.com/users/${name}`)
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    else {
      throw new Error("Something went wrong fetching user");
    }
  }
  catch (error) {
    console.log(error);
    throw error;
  }
}
