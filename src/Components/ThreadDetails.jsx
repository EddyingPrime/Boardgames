import { useState } from "react";

const ThreadDetail = ({ match }) => {
  const { forumId, threadId } = match.params;
  const [comments, setComments] = useState([]);
  const [reactionCount, setReactionCount] = useState(0);

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  const handleReact = () => {
    setReactionCount(reactionCount + 1);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">
        Thread {threadId} in Forum {forumId}
      </h1>
      <p className="mb-2">Reactions: {reactionCount}</p>
      <button
        onClick={handleReact}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        React
      </button>
      <h2 className="text-2xl font-bold mt-4 mb-2">Comments</h2>
      <ul className="list-disc pl-4">
        {comments.map((comment, index) => (
          <li key={index} className="mb-2">
            {comment}
          </li>
        ))}
      </ul>
      <textarea
        placeholder="Add a comment..."
        onChange={(e) => setCommentText(e.target.value)}
        className="w-full mt-4 p-2 border rounded"
      />
      <button
        onClick={() => handleAddComment(commentText)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add Comment
      </button>
    </div>
  );
};

export default ThreadDetail;
