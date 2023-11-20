import { useState } from "react";
import CommentForm from "./CommentForm";

const ThreadDetails = ({ thread }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [upvotes, setUpvotes] = useState(0);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleUpvote = () => {
    // Increment the upvote count
    setUpvotes(upvotes + 1);
  };

  return (
    <div className="bg-white border p-4 mb-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">{thread.title}</h3>
      <p className="text-gray-700">{thread.content}</p>

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
              {comment}
            </div>
          ))}

          {/* Comment form */}
          <CommentForm onSubmit={handleCommentSubmit} />
        </>
      )}
    </div>
  );
};

export default ThreadDetails;
