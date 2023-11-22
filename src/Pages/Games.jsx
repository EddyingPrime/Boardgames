import { useState, useEffect } from "react";
import axios from "axios";

const itemsPerPage = 12;

const Games = () => {
  const [boardGames, setBoardGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/board-games"
        );
        setBoardGames(response.data.data); // Assuming the API response has a 'data' property
      } catch (error) {
        console.error("Error fetching board games:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = boardGames.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(boardGames.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {currentProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white p-1 rounded-lg shadow-md flex flex-col"
        >
          <div className="aspect-w-1 aspect-h-1 mb-4">
            <img
              src={`asset${product.image}.jpg`}
              alt={product.name}
              className="object-contain rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <div className="flex space-x-4">
            <button className="bg-gray text-black px-4 py-2 rounded-md">
              Explore
            </button>
            <button className="bg-orange text-black px-4 py-2 rounded-md">
              Buy
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-4 items-center ">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-2 px-3 py-1 rounded-md ${
                currentPage === page ? "bg-orange" : "bg-black"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Games;
