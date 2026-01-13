import UserInfo from "./UserInfo";

export default function ProfilePage({ userData }) {
  return (
    <div>
      <p>Profile page starts here</p>
      <UserInfo userData={userData} />
    </div>
  )
}
