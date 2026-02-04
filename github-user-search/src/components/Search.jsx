import { useState } from "react";
import fetchUserData from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setUsers([]);
    setIsLoading(true);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUsers(data);
    } catch (err) {
      setError("Looks like we cant find the user");
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="Location (e.g., Lagos)"
            className="border p-2 rounded w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            type="number"
            placeholder="Min Repositories"
            className="border p-2 rounded w-full"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-8">
        {isLoading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow hover:shadow-lg transition bg-white">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{user.login}</h2>
              <div className="text-center mt-2">
                <p className="text-sm text-gray-600">Location: {user.location || "N/A"}</p>
                <p className="text-sm text-gray-600">Repos: {user.public_repos || "N/A"}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block mt-2"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
