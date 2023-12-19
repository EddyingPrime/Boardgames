import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import images1 from "../assets/Uno.jpg";
import images2 from "../assets/King.jpg";
import images3 from "../assets/Lost.png";
import images4 from "../assets/Septima.png";
import images5 from "../assets/Spirit.png";
import images6 from "../assets/Nucleum.png";
import images7 from "../assets/Voidfall.png";
import images8 from "../assets/WhiteCastle.png";

const Featured = () => {
  const categories = [
    { id: 1, name: 'UNO', link: '/uno', image: images1 },
    { id: 2, name: 'King of Tokyo', link: '/King', image: images2 },
    { id: 3, name: 'Lost Ruins of Arnak', link: '/Lost', image: images3 },
    { id: 4, name: 'Septima', link: '/septima', image: images4 },
    { id: 5, name: 'Spirit island', link: '/Spirit', image: images5 },
    { id: 6, name: 'Nucleum', link: '/', image: images6 },
    { id: 7, name: 'Voidfall', link: '/', image: images7 },
    { id: 8, name: 'White Castle', link: '/', image: images8 },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto px-2 py-5 mb-5">
  <div className="bg-black rounded-lg overflow-hidden shadow-md text-center p-4 mb-4 font-sora">
    <h2 className="text-5xl font-bold font-montserrat text-white">Explore Our Game Collection</h2>
  </div>
  <Slider {...sliderSettings}>
    {categories.map((category) => (
      <div key={category.id} className="px-1">
        <Link to={category.link} className="block">
          <div className="bg-white border rounded-lg overflow-hidden shadow-md">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <h3 className="text-xl font-semibold mb-2 text-black">{category.name}</h3>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </Slider>
</div>

  );
};

export default Featured;
