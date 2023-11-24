import { useEffect, useState } from "react";
import { UseAuth } from "../authentication/UseAuth";
import axios from "axios";

const Profile = () => {
  const { isAuthenticated, logout } = UseAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("AUTH_TOKEN");
        if (!token) {
          throw new Error("Authentication token not found");
        }

        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
      } catch (error) {
        console.error(error);
        setError(
          error.response
            ? error.response.data
            : { message: "Error fetching user profile" }
        );
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error && error.message === "Unauthenticated.") {
    // Token might be invalid or expired. Log out the user.
    logout();
    return <p>You are not authenticated. Please log in again.</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      {isAuthenticated && user ? (
        <div>
          <h2 className="text-3xl font-semibold mb-4">Welcome, {user.name}!</h2>
          <div className="flex items-center mb-4">
            {user.profile_image && (
              <img
                src={user.profile_image}
                alt={`${user.name}'s profile`}
                className="rounded-full h-16 w-16 object-cover mr-4"
              />
            )}
            <div>
              <p className="text-lg">{user.email}</p>
              {/* Add more user details as needed */}
            </div>
          </div>
          {/* Add more sections or details about the user's profile */}
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
