import { Link, Route, Routes } from "react-router-dom";
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
        {/* React Router Route for Reservation Page */}
        <Routes>
          <Route path={`/:cafeName`} element={<ReservationPage />} />
        </Routes>

        {/* Additional content for your Cafe page */}
      </div>
  );
};

export default Cafe;
