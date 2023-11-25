import React, { useState } from 'react';
import { useEffect, useState } from "react";
import { UseAuth } from "../authentication/UseAuth";
import axios from "axios";

const Profile = () => {
  const [userName, setUserName] = useState(' ');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePictureChange = (event) => {
    setProfilePic(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };
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
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6 mb-4">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
        <div className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0">
          <h1 className="text-black font-bold  text-2xl mb-2">Welcome,</h1>
          <div className={`border border-gray-300 rounded-md p-2 ${editMode ? 'p-2' : ''}`}>
            {editMode ? (
              <input
                type="text"
                value={userName}
                onChange={handleNameChange}
                className="w-full py-1 px-2 text-black leading-tight focus:outline-none"
              />
            ) : (
              <span>{userName}</span>
            )}
          </div>
          <h2 className="text-gray font-bold my-2">Email</h2>
          <div className={`border border-gray-300 p-2 rounded-md ${editMode ? 'p-2' : ''}`}>
            {editMode ? (
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className="w-full py-1 px-2 text-gray leading-tight focus:outline-none"
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          {editMode && (
            <button
              onClick={handleSaveClick}
              className="bg-blue hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          )}
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative border border-gray rounded-md overflow-hidden">
            <input
              id="profilePic"
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
              className="hidden"
            />
            <img
              src={profilePic}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full cursor-pointer"
            />
            {editMode && (
              <button
                onClick={() => document.getElementById('profilePic').click()}
                className="absolute bottom-0 right-0 bg-blue text-black font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Change
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {!editMode && (
          <button
            onClick={handleEditClick}
            className="bg-blue hover:bg-blue text-black font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
