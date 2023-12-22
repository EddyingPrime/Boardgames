import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import ReservationPage from "../Components/ReservationPage";
import TableTaft from '../assets/TableTaft.png';
import GameOver from '../assets/GameOver.png';
import Hungry from '../assets/Hungry.png';
import Happy from '../assets/Happy.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cafe = () => {
  const recommendedCafes = [
    {
      id: 1,
      name: 'TableTaft Boardgame Cafe',
      link: '/TableTaft',
      image: TableTaft,
    },
    {
      id: 2,
      name: 'Game Over PH: Respawn',
      link: '/GameOver',
      image: GameOver,
    },
    {
      id: 3,
      name: 'Hungry Meeples',
      link: '/Hungry',
      image: Hungry,
    },
    {
      id: 4,
      name: 'Happy Beans',
      link: '/Happy',
      image: Happy,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [reservationData, setReservationData] = useState({
    name: '',
    date: '',
    time: '',
    seats: 1,
  });

  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log('Reservation form submitted:', reservationData);
    // Add logic for submission or API call
  };


  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="container mx-auto px-2 py-5 mb-5">
  <div className="bg-black rounded-lg overflow-hidden shadow-md text-center p-4 mb-4 font-sora">
    <h2 className="text-5xl font-bold font-montserrat text-white">Recommended Cafes</h2>
  </div>
  <Slider {...sliderSettings}>
    {recommendedCafes.map((cafe) => (
      <div key={cafe.id} className="px-1">
        <Link to={cafe.link} className="block">
          <div className="bg-white border rounded-lg overflow-hidden shadow-md">
            <img
              src={cafe.image}
              alt={cafe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <h3 className="text-xl font-semibold mb-2 text-black">{cafe.name}</h3>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </Slider>
</div>
<div className="container mx-auto p-4">
        <form onSubmit={handleReservationSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Reservation Form</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={reservationData.name}
              onChange={handleReservationChange}
              className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={reservationData.date}
              onChange={handleReservationChange}
              className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={reservationData.time}
              onChange={handleReservationChange}
              className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="seats" className="block text-gray-700 font-bold mb-2">
              Number of Seats
            </label>
            <input
              type="number"
              id="seats"
              name="seats"
              value={reservationData.seats}
              onChange={handleReservationChange}
              className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500"
              min="1"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-orange hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>


        {/* React Router Route for Reservation Page */}
        <Routes>
          <Route path={`/:cafeName`} element={<ReservationPage />} />
        </Routes>

        {/* Additional content for your Cafe page */}
      </div>
  );
};

export default Cafe;
