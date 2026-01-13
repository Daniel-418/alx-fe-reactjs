export default function UserDetails({ userData }) {
  return (
    <div>
      <p>This is the user details component</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  )
}
