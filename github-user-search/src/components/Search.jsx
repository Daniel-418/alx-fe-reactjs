import { useState } from "react";
import fetchUserData from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    setUsername(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setUserData(null);
    setIsLoading(true);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={username}
          placeholder="Enter username (not email)"
        />
        <button type="submit">login</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p style={{ color: 'red' }}>{error}</p>}

        {!isLoading && userData && (
          <div>
            <h3>{userData.name}</h3>
            <p>{userData.bio || "No bio available"}</p>
            <img src={userData.avatar_url} alt="Avatar" width="100" />
          </div>
        )}
      </div>
    </div>
  );
}
