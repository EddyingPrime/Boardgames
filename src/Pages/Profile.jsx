import { useEffect, useState } from "react";

const Profile = () => {
  // State to store user data
  const [userObject, setUserObject] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem("userData");

    // Check if user data exists
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserObject(parsedUserData.Data.user);
    }
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="bg-gray min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4 text-orange">User Profile</h1>
      {userObject ? (
        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="text-gray-700">
            <strong>ID:</strong> {userObject.id}
          </p>
          <p className="text-gray-700">
            <strong>Name:</strong> {userObject.name}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {userObject.email}
          </p>
          {/* Add more user information as needed */}
        </div>
      ) : (
        <p className="text-white">No user data found. Please log in.</p>
      )}
    </div>
  );
};

export default Profile;
