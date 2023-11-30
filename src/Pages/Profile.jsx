import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../authentication/useAuth";

const Profile = () => {
  const { getToken } = useAuth();
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = getToken();
        console.log("Token in Profile:", token);
        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("User data:", response.data);
        console.log("Token:", getToken());
        const userData = response.data;

        setName(userData.name);
        setEmail(userData.email);
        setLocation(userData.location);
        setProfileImage(userData.profileImage);
        setCoverImage(userData.coverImage);
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
        "http://localhost:8000/api/update-avatar",
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
    formData.append("coverImage", e.target.files[0]);

    try {
      const token = getToken();
      const response = await axios.post(
        "http://localhost:8000/api/update-cover-image",
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

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSaveChanges = async () => {
    const updatedUserData = {
      name,
      email,
      location,
      profileImage,
      coverImage,
    };

    try {
      const token = getToken();
      await axios.post("http://localhost:8000/api/profile", updatedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-full cursor-pointer"
          />
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
            <img
              src={profileImage || "path/to/default/profile-image.jpg"}
              alt="Profile"
              className="w-32 h-32 rounded-full cursor-pointer"
            />
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
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={handleLocationChange}
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
                <p className="text-gray-600">{location}</p>
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
