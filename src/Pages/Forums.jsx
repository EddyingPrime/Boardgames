import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ThreadForm from "../Components/ThreadForm";
import ThreadDetails from "../Components/ThreadDetails";
import http from "../Http/http";

const Forums = () => {
  const [threads, setThreads] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await http().get("/threads");
        console.log("Threads response:", response);
        setThreads(response.data.threads);
      } catch (error) {
        console.error("Error fetching threads:", error);
      }
    };

    fetchThreads();
  }, []);

  const handleThreadFormSubmit = async (newThread) => {
    try {
      if (!user) {
        console.error("User not logged in.");
        return;
      }

      const response = await http().post("/threads", {
        ...newThread,
        user_id: user.user_id,
      });

      console.log("Response from server:", response);

      setThreads((prevThreads) =>
        prevThreads !== null
          ? [...prevThreads, response.data.thread]
          : [response.data.thread]
      );
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  const handleUpvote = (threadId) => {
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

        {threads.map((thread) => (
          <ThreadDetails
            key={thread.id}
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
