function UserProfile() {
  return (
    <div className="hover:shadow-xl user-profile bg-gray-100 p-2 md:p-8 sm:p-4 max-w-sm mx-auto my-20 rounded-lg shadow-lg md:max-w-sm max-w-xs">
      <img className="hover:scale-110 transition-transform duration-100 ease-in-out rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto" src="https://placehold.co/150" alt="User" />
      <h1 className="hover:text-blue-500 hover:cursor-pointer md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
      <p className="md:text-base sm:text-sm text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
