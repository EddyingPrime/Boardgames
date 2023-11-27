import { useState, useEffect } from "react"; 
import UnoBg from "../assets/Unobg.jpg";
import image1 from "../assets/Unobg1.jpg";
import image2 from "../assets/Unobg2.jpg";
import image3 from "../assets/Uno1.jpg";
import image4 from "../assets/Uno2.jpg";
import image5 from "../assets/Uno3.jpg";
import image6 from "../assets/Uno4.jpg";



const Septima = () => {
  const images = [UnoBg, image1, image2];

  const imagesList = [image3, image4, image5, image6];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative h-screen -mb-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`hero-${index}`}
            className={`absolute w-full h-[70%] transition-opacity duration-2000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      
      <div className="bg-white py-2 bg-opacity-10 ">     
      <div className="container mx-auto px-4 lg:flex">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className=" bg-gray rounded-lg border border-gray-500 p-5 mb-2 w-[100%] -mt-[20%]">
            
            <h2 className="text-xl font-bold mb-2">Description</h2>
              <p>
                Uno is a fast-paced card game designed for 2 to 10 players,
                though it's most enjoyable with 3 to 7 players. The game is
                played with a specialized deck of cards and follows simple yet
                engaging rules.
              </p>
            </div>
            <div className="bg-gray rounded-lg border border-gray-500 p-4 mb-2">
              <h2 className="text-xl font-bold mb-2">Gameplay Overview</h2>
              <p>
                Players aim to be the first to get rid of all the cards in their
                hand. The deck consists of cards in four colors: red, blue,
                green, and yellow, with each color containing numbered cards (0
                to 9) and special action cards.
              </p>
            </div>
            <div className="bg-gray rounded-lg border border-gray-500 p-4">
              <h2 className="text-xl font-bold mb-2">Gameplay Mechanics:</h2>
              <p>
                *Players take turns playing a card from their hand that matches
                the top card of the discard pile in either number, color, or
                action.
              </p>
              <p>
                *If a player doesn't have a playable card, they must draw from
                the draw pile. If the drawn card can be played, they can play
                it; otherwise, their turn ends.
              </p>
            </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-5 gap-4">
          {imagesList.map((imageSrc, index) => (
            <div key={index} className="border border-gray-400 p-2">
              <img
                src={imageSrc}
                alt={`Image ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Video Link Container */}
          <h2 className="text-2xl font-bold mb-4">How to Play Uno</h2>
          <div className="flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=sWoSZmHsCls"
              title="Uno Gameplay Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4 mb-5">
        <div className="bg-gray rounded-lg shadow-md p-6">
          <div>
            <h3 className="text-xl mb-2 font-bold">Objective</h3>
            <p className="mb-4 text-lg">
              The objective of Uno is to be the first player to get rid of all
              the cards in your hand.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Setup</h3>
            <p className="mb-4 text-lg">
              Shuffle the deck of Uno cards. Deal 7 cards to each player. Place
              the remaining deck face down as the draw pile. Flip the top card
              from the draw pile to start the discard pile.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Winning</h3>
            <p className="mb-4 text-lg">
              The first player to play all their cards wins the round. They
              receive points based on the remaining cards in opponents' hands.
              The game continues until a player reaches a predetermined points
              goal.
            </p>
          </div>
          <p className="text-lg">
            Remember, house rules can vary, so be sure to clarify any specific
            rules or variations before starting the game!
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Septima;
