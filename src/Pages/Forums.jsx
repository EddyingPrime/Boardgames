import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ThreadForm from "../Components/ThreadForm";
import ThreadDetails from "../Components/ThreadDetails";

const Forums = () => {
  const [threads, setThreads] = useState([]);
  const navigate = useNavigate();

  const handleThreadFormSubmit = (newThread) => {
    // In a real application, you would likely send the newThread data to the backend
    // and add the new thread to the list once the backend confirms success.
    // For simplicity, I'm just adding it directly to the list here.
    setThreads([...threads, newThread]);
  };

  const handleUpvote = (threadId) => {
    // Similar to handleThreadFormSubmit, you would likely send an upvote request to the backend.
    // For simplicity, I'm just logging it here.
    console.log(`Upvoting thread with ID: ${threadId}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <ThreadForm onSubmit={handleThreadFormSubmit} />

        {!localStorage.getItem("token") && (
          <p>
            Please{" "}
            <span
              className="text-orange cursor-pointer"
              onClick={() => navigate("/login")}
            >
              log in
            </span>{" "}
            to post new threads or add comments
          </p>
        )}

        {threads.map((thread, index) => (
          <ThreadDetails
            key={index}
            thread={thread}
            isAuthenticated={localStorage.getItem("token")}
            onUpvote={() => handleUpvote(thread.id)}
          />
        ))}

        <Outlet />
      </div>
    </div>
  );
};

export default Forums;
