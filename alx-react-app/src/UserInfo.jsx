import UserDetails from "./UserDetails";

export default function UserInfo({ userData }) {
  return (
    <div>
      <p>This is the UserInfo component</p>
      <UserDetails userData={userData} />
    </div>
  );
}
