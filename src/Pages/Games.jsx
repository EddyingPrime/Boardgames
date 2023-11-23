import { useState, useEffect } from "react";
import axios from "axios";

const itemsPerPage = 8;

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
    <div className="container mx-auto p-4 ">
      <div className="grid laptop:grid-cols-4 tablet:grid-cols-3 phone:grid-cols-1 gap-4">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-2 rounded-lg shadow-md card"
          >
            <div className="mb-4">
              {product.image && (
                <img
                  src={`http://localhost:8000/uploads/${product.image}`}
                  alt={product.name}
                  className="object-cover rounded-md h-40 w-full"
                />
              )}
            </div>
            <h2 className="text-xl font-semibold mb-0">{product.name}</h2>
            <p className="text-sm mb-2">{product.description}</p>
            <div className="flex justify-center mx-0 my-0">
              <button className="bg-orange text-white px-4 py-2 rounded-md">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 items-center  ">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-2 px-3 py-1 rounded-md ${
                currentPage === page ? "bg-orange" : "bg-black text-white"
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
