import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.png';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.png';

const Hero = () => {
  const images = [image1, image3, image4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen -mb-[5%]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`hero-${index}`}
          className={`absolute w-full h-[70%] transition-opacity   duration-2000 ${
            index === currentImage ? 'opacity-80' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-gray bg-opacity-70 mb-[20%] rounded-md p-2 max-w-md text-center">
          <h1 className="text-5xl font-bold mb-4 text-orange">Welcome</h1>
          <p className="mb-8 text-2xl">
            🎲 Are you ready to roll the dice and experience the joy of board
            games? Look no further!{' '}
            <span className="font-bold">Touch Grass</span> is your ultimate
            destination for all things board games and socialization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
