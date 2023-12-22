import { useState } from "react";
import CommentForm from "./CommentForm";
import http from "../Http/http";

const ThreadDetails = ({ thread, isAuthenticated, onUpvote }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [upvotes, setUpvotes] = useState(thread.upvotes);

  const handleCommentSubmit = async (newComment) => {
    try {
      const response = await http().post(`/threads/${thread.id}/comments`, {
        content: newComment,
      });

      setComments((prevComments) => [
        ...(prevComments || []),
        response.data.comment,
      ]);
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  const handleUpvote = async () => {
    try {
      await http().post(`/threads/${thread.id}/upvote`);
      setUpvotes(upvotes + 1);
      onUpvote();
    } catch (error) {
      console.error("Error upvoting thread:", error);
    }
  };

  return (
    <div className="bg-white border p-4 mb-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">{thread.title}</h3>
      <p className="text-gray-700">{thread.content}</p>

      <p className="text-gray-500 mt-2">
        Created by: {thread.user ? thread.user.name : "Unknown User"} on{" "}
        {new Date(thread.created_at).toLocaleString()}
      </p>

      <button
        onClick={handleUpvote}
        className="text-orange mt-2 underline cursor-pointer"
      >
        Upvote ({upvotes})
      </button>

      <button
        onClick={() => setShowComments(!showComments)}
        className="text-orange ml-4 underline cursor-pointer"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && (
        <>
          {/* Display existing comments */}
          {comments.map((comment, index) => (
            <div key={index} className="mt-2">
              {comment.content}
            </div>
          ))}

          {/* Comment form */}
          {isAuthenticated && <CommentForm onSubmit={handleCommentSubmit} />}
        </>
      )}
    </div>
  );
};

export default ThreadDetails;
