import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../authentication/useAuth";

const Profile = () => {
  const { getToken } = useAuth();
  const [avatar, setProfileImage] = useState("");
  const [cover_image, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = getToken();

        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

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

          const storedAvatar = localStorage.getItem("avatar");
          const storedCoverImage = localStorage.getItem("cover_image");

          setProfileImage(storedAvatar || userData.avatar);
          setCoverImage(storedCoverImage || userData.cover_image);
        } else {
          console.log("Token is null. User not authenticated.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [getToken]);

  useEffect(() => {
    if (avatarFile) {
      const imageUrl = URL.createObjectURL(avatarFile);
      setProfileImage(imageUrl);
      localStorage.setItem("avatar", imageUrl);
    }
  }, [avatarFile]);

  useEffect(() => {
    if (coverImageFile) {
      const imageUrl = URL.createObjectURL(coverImageFile);
      setCoverImage(imageUrl);
      localStorage.setItem("cover_image", imageUrl);
    }
  }, [coverImageFile]);

  const handleSaveChanges = async () => {
    const formData = new FormData();

    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }

    if (coverImageFile) {
      formData.append("cover_image", coverImageFile);
    }

    // Append other profile data
    formData.append("name", name);
    formData.append("email", email);

    try {
      const token = getToken();
      await axios.post("http://localhost:8000/api/update-profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setEditing(false);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleProfileImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setAvatarFile(selectedFile);
  };

  const handleCoverImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setCoverImageFile(selectedFile);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-gray min-h-screen">
      {/* Cover Image */}
      <div className="bg-cover bg-center h-60">
        <input
          type="file"
          onChange={handleCoverImageChange}
          className=""
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
            className=""
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
