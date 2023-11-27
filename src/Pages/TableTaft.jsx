import { useState } from 'react';
import React from 'react';
import TableTaft from '../assets/TableTaft.png';

const TableTaft = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (itemName) => {
    console.log(`Clicked item: ${itemName}`);
  };
  const handleContactRestaurant = () => {
    window.location.href = 'https://booky.ph/biz/tabletaft-boardgame-cafe-university-mall/about/';
  };

  const handleViewMap = () => {
    window.location.href = 'https://www.google.com/maps/place/University+Mall/@14.5631695,120.9918463,17z/data=!4m10!1m2!2m1!1s2%2FF+University+Mall,+Taft+Ave,+University+Mall,+Malate,+Manila,+Metro+Manila!3m6!1s0x3397c9794052e429:0xf7db381975af980d!8m2!3d14.5631773!4d120.994444!15sCkwyL0YgVW5pdmVyc2l0eSBNYWxsLCBUYWZ0IEF2ZSwgVW5pdmVyc2l0eSBNYWxsLCBNYWxhdGUsIE1hbmlsYSwgTWV0cm8gTWFuaWxhWkkiRzIgZiB1bml2ZXJzaXR5IG1hbGwgdGFmdCBhdmUgdW5pdmVyc2l0eSBtYWxsIG1hbGF0ZSBtYW5pbGEgbWV0cm8gbWFuaWxhkgEPc2hvcHBpbmdfY2VudGVy4AEA!16s%2Fg%2F11gbfb7ms6?entry=ttu'; 
  };

  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Mozzarella Sticks', price: 180 },
        { name: 'Buffalo Wings', price: 220 },
      ],
    },
    {
      category: 'Main Course',
      items: [
        { name: 'Chicken Alfredo Pasta', price: 320 },
        { name: 'Beef Burger', price: 280 },
      ],
    },
    {
      category: 'Rice Bowls',
      items: [
        { name: 'Chicken Teriyaki', price: 320 },
        { name: 'Crispy Fried Chicken', price: 280 },
      ],
    },
  ];

  return (
    <div className="font-sans">
      <div className="bg-gray-100">
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-8 md:py-24 mx-auto flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full px-4 mb-8 lg:mb-0">
              <div className="flex justify-center items-center h-full">
                <img
                  alt="TableTaft Boardgame Cafe"
                  className="object-cover object-center rounded-lg max-w-full"
                  src={TableTaft}
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-4 py-8">
              <div className="flex flex-col justify-center items-start h-full text-center lg:text-left">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  TableTaft Boardgame Cafe
                </h1>
                <p className="mb-8 leading-relaxed">
                  TableTaft is a board game cafe located in University Mall, Taft Avenue. It's a
                  perfect place for friends to hang out and enjoy a wide selection of board games
                  while having delicious food and drinks.
                </p>
                <div className="max-w-xs mx-auto md:max-w-full md:mx-0">
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps/place/University+Mall/@14.5631695,120.9918463,17z/data=!4m10!1m2!2m1!1s2%2FF+University+Mall,+Taft+Ave,+University+Mall,+Malate,+Manila,+Metro+Manila!3m6!1s0x3397c9794052e429:0xf7db381975af980d!8m2!3d14.5631773!4d120.994444!15sCkwyL0YgVW5pdmVyc2l0eSBNYWxsLCBUYWZ0IEF2ZSwgVW5pdmVyc2l0eSBNYWxsLCBNYWxhdGUsIE1hbmlsYSwgTWV0cm8gTWFuaWxhWkkiRzIgZiB1bml2ZXJzaXR5IG1hbGwgdGFmdCBhdmUgdW5pdmVyc2l0eSBtYWxsIG1hbGF0ZSBtYW5pbGEgbWV0cm8gbWFuaWxhkgEPc2hvcHBpbmdfY2VudGVy4AEA!16s%2Fg%2F11gbfb7ms6?entry=ttu"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
                  <a href="#" className="text-blue-500 inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    Board Game Cafe
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    Taft Avenue
                  </span>
                </div>
                <p className="text-gray-500 text-sm tracking-widest">4.9 ⭐ (300+ reviews)</p>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-xs mx-auto md:max-w-full md:mx-0 flex justify-center space-x-4 mt-4 md:mt-8">
                  <button
                    onClick={handleContactRestaurant}
                    className="bg-stone hover:bg-blue-600 text-white font-semibold py-3 px-6 md:px-8 rounded-full focus:outline-none"
                  >
                    Contact Restaurant
                  </button>
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="bg-stone hover:bg-blue-600 text-white font-semibold py-3 px-6 md:px-8 rounded-full focus:outline-none"
                  >
                    {showMenu ? 'Hide Menu' : 'Menu'}
                  </button>
                </div>

        {/* Menu Section */}
        {showMenu && (
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuItems.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border border-gray-200 rounded-md p-4 cursor-pointer transition duration-300 hover:bg-gray-100"
                        onClick={() => handleClick(item.name)}
                      >
                        <p className="text-lg font-medium">{item.name}</p>
                        <p className="text-gray-500">{`₱${item.price}`}</p>
                      </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
        </div>
      </div>
  );
};

export default TableTaft;







