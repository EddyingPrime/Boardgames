import { useState } from "react";

const ThreadForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input fields if needed

    // Call the onSubmit prop with the thread details
    onSubmit({ title, content });

    // Clear form fields after submission
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md mb-4"
    >
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

      <label
        htmlFor="content"
        className="block mt-4 text-sm font-medium text-gray-700"
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

      <button
        type="submit"
        className="mt-4 bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark focus:outline-none focus:shadow-outline-orange active:bg-orange-darker"
      >
        Submit
      </button>
    </form>
  );
};

export default ThreadForm;
