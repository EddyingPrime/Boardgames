import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ThreadForm from "../Components/ThreadForm";
import ThreadDetails from "../Components/ThreadDetails";
import { UseAuth } from "../authentication/UseAuth";

const Forums = () => {
  const { isAuthenticated } = UseAuth();
  const [threads, setThreads] = useState([]);
  const navigate = useNavigate();

  const handleThreadFormSubmit = (newThread) => {
    setThreads([...threads, newThread]);
    // Additional logic to send new thread data to the server
  };

  const handleUpvote = (threadId) => {
    if (isAuthenticated) {
      // Logic to handle upvote when user is authenticated
      // You may want to send a request to the server to update the upvote count
      console.log(`Upvoting thread with ID: ${threadId}`);
    } else {
      // Redirect to the login page if user is not authenticated
      navigate("/login");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        {isAuthenticated && <ThreadForm onSubmit={handleThreadFormSubmit} />}
        {!isAuthenticated && (
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
            isAuthenticated={isAuthenticated}
            onUpvote={() => handleUpvote(thread.id)}
          />
        ))}

        <Outlet />
      </div>
    </div>
  );
};

export default Forums;
