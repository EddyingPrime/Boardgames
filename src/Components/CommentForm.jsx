import { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input fields if needed

    // Call the onSubmit prop with the comment details
    onSubmit(comment);

    // Clear the form field after submission
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <label htmlFor="comment" className="text-gray-700 font-medium">
        Comment:
      </label>
      <textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
        placeholder="Write your comment here..."
      />
      <button
        type="submit"
        className="bg-orange text-white py-2 px-4 mt-2 rounded-md hover:bg-opacity-80 transition duration-300"
      >
        Submit Comment
      </button>
    </form>
  );
};

export default CommentForm;
