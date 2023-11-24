import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import images1  from "../assets/Uno.jpg"
import images2 from "../assets/King.jpg"
import images3 from "../assets/Lost.png"
import images4 from "../assets/Septima.png"
import images5 from "../assets/Spirit.png"
import images6 from "../assets/Nucleum.png"
import images7 from "../assets/Voidfall.png"
import images8 from "../assets/WhiteCastle.png"




const Featured = () => {
  const categories = [
    {
        id: 1,
        name: 'UNO',
        link: '/uno',
        image: images1,
    },
    {
      id: 2,
      name: 'King of Tokyo',
      image: [images2],
      link: '/King',
    },
    {
        id: 3,
        name: 'Lost Ruins of Arnak',
        image: [images3],
        link: '/',
      },
      {
        id: 4,
        name: 'Septima',
        image: [images4],
        link: '/',
      },
      {
        id: 5,
        name: 'Spirit island',
        image: [images5],
        link: '/',
      },
      {
        id: 6,
        name: 'Nucleum',
        image: [images6],
        link: '/',
      },
      {
        id: 7,
        name: 'Voidfall',
        image: [images7],
        link: '/',
      },
      {
        id: 8,
        name: 'White Castle',
        image: [images8],
        link: '/',
      },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Extra small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
    <div className="container mx-auto p-4 mb-5">
      <Slider {...sliderSettings}>
        {categories.map((category) => (
          <div key={category.id}>
            <Link to={category.link} className="block">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <button className="bg-orange text-white py-1 px-2 rounded-md hover:bg-yellow-500">
                  Explore
                </button>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default Featured;
