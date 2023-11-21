import { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { UseAuth } from "../authentication/UseAuth"; // Adjust the import based on your actual implementation

const Profile = () => {
  const { isAuthenticated, csrfToken } = UseAuth(); // Adjust the usage based on your actual implementation
  const [user, setUser] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated) {
        // User is not authenticated, handle accordingly
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${csrfToken}`,
          },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // You might want to redirect to a login page or handle the error differently
        navigate("/Profile");
      }
    };

    fetchData();
  }, [isAuthenticated, navigate, csrfToken]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      if (selectedFile) {
        formData.append("profilePicture", selectedFile);
      }

      await axios.put("http://localhost:8000/api/profile", formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving user profile:", error);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        {isAuthenticated ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h2>
            {isEditing ? (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    Profile Picture:
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="profilePicture"
                    onChange={handleFileChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                {/* Add other fields as needed */}
                <button
                  onClick={handleSaveEdit}
                  className="bg-orange px-4 py-2 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p className="mb-4">Email: {user.email}</p>
                <p className="mb-4">
                  Profile Picture: {user.profilePicture || "Not available"}
                </p>
                {/* Display other fields as needed */}
                <button
                  onClick={handleEditClick}
                  className="bg-orange px-4 py-2 rounded"
                >
                  Edit
                </button>
              </>
            )}
          </>
        ) : (
          <p>
            Please{" "}
            <span
              className="text-orange cursor-pointer"
              onClick={() => navigate("/login")}
            >
              log in
            </span>{" "}
            to view and edit your profile.
          </p>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
