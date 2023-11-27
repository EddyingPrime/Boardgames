import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from "../Components/Hero";
import Featured from "../Components/Featured";
import TableTaft from '../assets/TableTaft.png';
import GameOver from '../assets/GameOver.png';
import Hungry from '../assets/Hungry.png';
import Happy from '../assets/Happy.png';

const Home = () => {

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

  const recommendedCafes = [
    {
      id: 1,
      name: 'TableTaft Boardgame Cafe',
      link: '/tabletaft',
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const topThreads = [
    { id: 1, title: "Thread 1", author: "User1", comments: 10 },
    { id: 2, title: "Thread 2", author: "User2", comments: 8 },
    // Add more threads as needed
  ];

  return (
    <>
    <Hero/>
    <div className="bg-gray min-h-screen">
      <div className="container mx-auto -mt-[14%]">
        <h2 className="text-2xl font-bold mb-4">
          Discover the World of Board Games
        </h2>
        <p className="mb-8">
          Explore a vast collection of board games for every taste and skill
          level. From classic strategy games to modern party favorites, we have
          it all. Whether you're a seasoned board gamer or just getting started,
          our curated selection promises endless hours of fun.
        </p>
        <span className="mb-8 font-bold">
          👫 Connect with Friends and Family
        </span>
        <p className="mt-8 mb-4">
          Board games are best enjoyed with company! Invite your friends and
          family to join you in exciting game nights. Strengthen bonds, create
          lasting memories, and share laughter as you embark on thrilling board
          game adventures together.
        </p>

          <Featured/>
        {/* Featured Games */}
        {/* <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
          <div className="flex space-x-4">
            <Link to="/Uno">
              <img src={images1} alt="Uno" className="h-60" />
            </Link>
            <Link to="/King">
              <img src={images2} alt="Uno" className="h-60" />
            </Link>
          </div>
        </div> */}
        <h2 className="text-2xl font-bold mb-4">
          Schedule Ahead for Cafe Reservations
        </h2>
        <p className="mb-8">
          Planning a special game night at one of our recommended cafes? Take
          advantage of our reservation feature! Schedule ahead to secure your
          spot and ensure an unforgettable gaming experience.
        </p>

        {/* Recommended Cafes */}
        <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recommended Cafes</h2>
        <Slider {...settings}>
          {recommendedCafes.map((cafe) => (
            <div key={cafe.id}>
              <Link to={cafe.link} className="flex flex-col items-center">
                <img
                  src={cafe.image}
                  alt={cafe.name}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                <p className="text-gray-800 font-semibold">{cafe.name}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

        {/* Top Threads with Comments */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Top Threads with Comments</h2>
          <ul className="space-y-4">
            {topThreads.map((thread) => (
              <li key={thread.id}>
                <Link to={`/forums/${thread.id}`}>
                  <h3 className="text-lg font-semibold">{thread.title}</h3>
                  <p className="text-gray-600">
                    By {thread.author} - {thread.comments} Comments
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
