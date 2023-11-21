import { useState } from "react";
import axios from "axios";
import { UseAuth } from "../authentication/UseAuth";

export default function ThreadForm() {
  const { authToken } = UseAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/threads",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("Thread creation response:", response.data);

      // Handle success as needed
    } catch (error) {
      console.error("Thread creation error:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received. Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
      }

      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md mb-4"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Content:
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark focus:outline-none focus:shadow-outline-orange active:bg-orange-darker"
      >
        Submit
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
