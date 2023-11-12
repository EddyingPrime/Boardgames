import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Nucleum (2023)', price: '00.00', image: 'Nucleum.png' },
  { id: 2, name: 'Voidfall (2023)', price: '00.00', image: 'Voidfall.png' },
  { id: 3, name: 'Product 3', price: '00.00', image: 'Apiary.png' },
  { id: 4, name: 'Nucleum (2023)', price: '00.00', image: 'Arknova.png' },
  { id: 5, name: 'Product 2', price: '00.00', image: 'WhiteCastle.png' },
  { id: 6, name: 'Product 3', price: '00.00', image: 'Calimala.png' },
  { id: 7, name: 'Product 2', price: '00.00', image: 'Planet.png' },
  { id: 8, name: 'Product 3', price: '00.00', image: 'Lost.png' },
  { id: 9, name: 'Nucleum (2023)', price: '00.00', image: 'Spirit.png' },
  { id: 10, name: 'Product 2', price: '00.00', image: 'Septima.png' },
  { id: 11, name: 'Product 3', price: '00.00', image: 'Nucleum.png' },
  { id: 12, name: 'Product 3', price: '00.00', image: 'Nucleum.png' },
  { id: 13, name: 'Product 3', price: '00.00', image: 'Calimala.png' },
  { id: 14, name: 'Product 2', price: '00.00', image: 'Nucleum.png' },
  { id: 15, name: 'Product 3', price: '00.00', image: 'Nucleum.png' },
  { id: 16, name: 'Nucleum (2023)', price: '00.00', image: 'Nucleum.png' },
  { id: 17, name: 'Product 2', price: '00.00', image: 'Nucleum.png' },
  { id: 18, name: 'Product 3', price: '00.00', image: 'Nucleum.png' },
  { id: 19, name: 'Product 3', price: '00.00', image: 'Nucleum.png' },
];

const itemsPerPage = 12;

const Games = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {currentProducts.map((product) => (
        <div key={product.id} className="bg-white p-1 rounded-lg shadow-md flex flex-col">
          <div className="aspect-w-1 aspect-h-1 mb-4">
            <img
              src={`src/assets/${product.image}`}
              alt={product.name}
              className="object-contain rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">{product.price}</p>
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
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-2 px-3 py-1 rounded-md ${
              currentPage === page ? 'bg-orange' : 'bg-black'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Games;
