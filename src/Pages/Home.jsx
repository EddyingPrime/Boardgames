import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from "../Components/Hero";
import Dice from "../Components/Dice";
import Featured from "../Components/Featured";
import TableTaft from '../assets/TableTaft.png';
import GameOver from '../assets/GameOver.png';
import Hungry from '../assets/Hungry.png';
import Happy from '../assets/Happy.png';



const Home = () => {
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


  const videoLinks = [
    "https://www.youtube.com/embed/video1",
    "https://www.youtube.com/embed/video2",
    "https://www.youtube.com/embed/video3",
    "https://www.youtube.com/embed/video4",
  ];

  const topThreads = [
    { id: 1, title: "Thread 1", author: "User1", comments: 10 },
    { id: 2, title: "Thread 2", author: "User2", comments: 8 },
    // Add more threads as needed
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
    <>
      <Hero />
      <div className="flex justify-center items-center relative -mt-2 bg-orange font-rubik">
        <div className="text-white text-center font-rubik">
          <h2 className="text-4xl font-bold mb-2 mt-2 text-black">PLAY, CONQUER, REPEAT</h2>
        </div>
      </div>
        <div className="max-w-full lg:max-w-3/4 bg-white rounded-lg p-6 shadow-xl border">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Discover the World of Board Games
          </h2>
          <p className="mb-6 text-xl text-black">
            Explore a vast collection of board games for every taste and skill level. From classic strategy games to modern party favorites, we have it all. Whether you're a seasoned board gamer or just getting started, our curated selection promises endless hours of fun.
          </p>
          <p className="mb-6 text-3xl font-bold text-black">
            👫 Connect with Friends and Family
          </p>
          <p className="mb-8 text-xl text-black">
            So grab your favorite game, gather your friends, and let’s embark on a journey through the world of board games as we explore the lessons they teach us, the memories they create, and the stories they tell.
          </p>
        </div>

        <Dice/>
        


            <Featured />
            <div className="bg-gray text-black py-8">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">
      Schedule Ahead for Cafe Reservations
    </h2>
    <p className="mb-6 text-lg">
      Planning a special game night at one of our recommended cafes? Take advantage of our reservation feature! Schedule ahead to secure your spot and ensure an unforgettable gaming experience.
    </p>
  </div>
</div>
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
            <div className="border">
              <h2 className="text-3xl font-bold mb-4 bg-gray text-black py-8">Top Threads with Comments</h2>
              <ul className="space-y-4">
                {topThreads.map((thread) => (
                  <li key={thread.id}>
                    <Link to={`/forums/${thread.id}`}>
                      <h3 className="text-xl font-semibold">{thread.title}</h3>
                      <p className="text-gray-600">
                        By {thread.author} - {thread.comments} Comments
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="container mx-auto py-4 lg:px-0 flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/4 p-4 bg-gray">
              <h2 className="text-2xl font-bold mb-4">Game Tutorials</h2>
              <div className="flex flex-wrap gap-2">
                {videoLinks.map((link, index) => (
                  <div key={index}>
                    <iframe
                      title={`Video ${index + 1}`}
                      src={link}
                      className="w-[200px] h-[200px] border rounded-md mb-2"
                    />
                  </div>
                ))}
              </div>
              </div>
              </div>



    </>
  );
};

export default Home;
