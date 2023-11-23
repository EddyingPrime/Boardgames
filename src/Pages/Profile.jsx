import { useEffect, useState } from "react";

const Profile = () => {
  const [userObject, setUserObject] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserObject(parsedUserData.Data.user);

      // Assume the API returns an object with an 'avatar_url' property
      fetch("", {
        method: "GET",
        headers: {
          // Add any headers required by your API
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Assuming the API response has an 'avatar_url' property
          setAvatarUrl(data.avatar_url);
        })
        .catch((error) => {
          console.error("Error fetching avatar:", error);
        });
    }
  }, []);

  return (
    <div className="bg-gray min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4 text-orange">User Profile</h1>
      {userObject ? (
        <div className="bg-white p-4 rounded-md shadow-md">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="mb-4 rounded-full"
            />
          ) : (
            <p>Loading avatar...</p>
          )}
          <p className="text-2xl">
            <strong>Name:</strong> {userObject.name}
          </p>
          <p className="text-sm">
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
