import { useState } from "react";
import { Outlet } from "react-router-dom";
import ThreadForm from "../Components/ThreadForm";

const Forums = () => {
  const [threads, setThreads] = useState([]);

  const handleThreadSubmit = (newThread) => {
    // Update the list of threads with the new thread
    setThreads([...threads, newThread]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        {/* Add ThreadForm component for thread creation */}
        <ThreadForm onSubmit={handleThreadSubmit} />

        {/* Render child components based on the route */}

        <h1 className="text-4xl font-bold mb-4">Forums</h1>

        {/* Render existing threads */}
        <ul>
          {threads.map((thread, index) => (
            <li
              key={index}
              className="bg-white border p-4 mb-4 rounded-md shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{thread.title}</h3>
              <p className="text-gray-700">{thread.content}</p>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default Forums;
