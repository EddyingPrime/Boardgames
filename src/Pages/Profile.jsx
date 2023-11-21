import { useEffect, useState } from "react";
import axios from "axios";
import { UseAuth } from "../authentication/UseAuth";

export default function Profile() {
  const { authToken, user } = UseAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user-profile",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setProfileData(response.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Error fetching profile data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [authToken]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      {loading && <p>Loading profile...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {profileData && (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {/* Add more profile details here */}
        </div>
      )}
    </div>
  );
}
