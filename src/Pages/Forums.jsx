import { useState } from "react";
import { Outlet } from "react-router-dom";
import ThreadForm from "../Components/ThreadForm";
import ThreadDetails from "../Components/ThreadDetails";

const Forums = () => {
  const [threads, setThreads] = useState([]);

  const handleThreadSubmit = (newThread) => {
    setThreads([...threads, newThread]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        {/* Add ThreadForm component for thread creation */}
        <ThreadForm onSubmit={handleThreadSubmit} />

        {/* Render existing threads */}
        {threads.map((thread, index) => (
          <ThreadDetails key={index} thread={thread} />
        ))}

        <Outlet />
      </div>
    </div>
  );
};

export default Forums;
