import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import http from "../Http/http";

const ThreadDetails = ({ thread, isAuthenticated, onUpvote }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [upvotes, setUpvotes] = useState(thread.upvotes);
  const [userData, setUserData] = useState(null);
  const [hasUpvoted, setHasUpvoted] = useState(false);

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
      if (hasUpvoted) {
        // If user has upvoted, send a request to remove the upvote
        await http().delete(`/threads/${thread.id}/upvote`);
        setUpvotes(upvotes - 1);
      } else {
        // If user hasn't upvoted, send a request to upvote
        await http().post(`/threads/${thread.id}/upvote`);
        setUpvotes(upvotes + 1);
      }

      // Toggle the upvote status
      setHasUpvoted((prevHasUpvoted) => !prevHasUpvoted);

      onUpvote();
    } catch (error) {
      console.error("Error handling upvote:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await http().get("/profile");
        setUserData(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [thread.id]);

  return (
    <div className="bg-white border p-4 mb-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">{thread.title}</h3>
      <p className="text-gray-700">{thread.content}</p>

      <p className="text-gray-500 mt-2">
        Created by: {userData ? userData.name : "Unknown User"} on{" "}
        {new Date(thread.created_at).toLocaleString()}
      </p>

      <button
        onClick={handleUpvote}
        className={`text-orange mt-2 underline cursor-pointer ${
          hasUpvoted ? "text-blue-500" : ""
        }`}
      >
        {hasUpvoted ? "Downvote" : "Upvote"}: {upvotes}
      </button>

      <button
        onClick={() => setShowComments(!showComments)}
        className="text-orange ml-4 underline cursor-pointer"
      >
        {showComments ? " Comments" : " Comments"}
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
