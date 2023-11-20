import { Link } from "react-router-dom";

const ForumList = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Forum List</h1>
      <ul className="list-disc pl-4">
        <li>
          <Link to="/forums/list" className="text-blue-500 hover:underline">
            General Discussion
          </Link>
        </li>
        {/* Add more forum links as needed */}
      </ul>
    </div>
  );
};

export default ForumList;
