import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../authentication/useAuth";

const Profile = () => {
  const { getToken } = useAuth();
  const [avatar, setProfileImage] = useState("");
  const [cover_image, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the token
        const token = getToken();

        // Check if the token is available
        if (token) {
          // Use the token in the headers
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          // Make the request
          const response = await axios.get(
            "http://localhost:8000/api/profile",
            config
          );

          console.log("User data:", response.data);
          console.log("Token:", token);

          const userData = response.data.user;

          setName(userData.name);
          console.log(userData.name);
          setEmail(userData.email);
          console.log(userData.email);
          setProfileImage(userData.avatar);
          console.log(userData.avatar);
          setCoverImage(userData.cover_image);
          console.log(userData.cover_image);
        } else {
          console.log("Token is null. User not authenticated.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [getToken]);

  const handleProfileImageChange = async (e) => {
    const formData = new FormData();
    formData.append("profileImage", e.target.files[0]);

    try {
      const token = getToken();
      const response = await axios.post(
        "http://localhost:8000/api/update-profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const newProfileImage = response.data.url;
      setProfileImage(newProfileImage);
    } catch (error) {
      console.error("Error uploading profile image:", error);
    }
  };

  const handleCoverImageChange = async (e) => {
    const formData = new FormData();
    formData.append("coverimage", e.target.files[0]);

    try {
      const token = getToken();
      const response = await axios.post(
        "http://localhost:8000/api/update-profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const newCoverImage = response.data.url;
      setCoverImage(newCoverImage);
    } catch (error) {
      console.error("Error uploading cover image:", error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveChanges = async () => {
    const updatedUserData = {
      name,
      email,
      avatar,
      cover_image,
    };

    try {
      const token = getToken();
      await axios.post(
        "http://localhost:8000/api/update-profile",
        updatedUserData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEditing(false);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div className="bg-gray min-h-screen">
      {/* Cover Image */}
      <div className="bg-cover bg-center h-60">
        <input
          type="file"
          onChange={handleCoverImageChange}
          className="hidden"
          id="coverPicInput"
        />
        <label htmlFor="coverPicInput">
          <img src={cover_image} alt="Cover" />
        </label>
      </div>

      {/* Profile Picture and Info */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-start space-x-6">
          <input
            type="file"
            onChange={handleProfileImageChange}
            className="hidden"
            id="profilePicInput"
          />
          <label htmlFor="profilePicInput">
            <img src={avatar} alt="Profile" />
          </label>
          {/* User Info */}
          <div>
            {editing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                  className="block border border-gray rounded-md px-4 py-2 w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="block border border-gray rounded-md px-4 py-2 w-full mb-2"
                />
                <button
                  onClick={handleSaveChanges}
                  className="bg-blue text-white font-semibold py-2 px-4 rounded focus:outline-none"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div>
                <h1 className="text-3xl font-semibold">{name}</h1>
                <p className="text-gray-600">{email}</p>
                <button
                  onClick={() => setEditing(true)}
                  className="bg-blue text-white font-semibold py-2 px-4 mt-2 rounded focus:outline-none"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
