import { useState, useEffect } from "react";
import image1 from "../assets/Kingbg.jpg";
import image2 from "../assets/King1.jpg";
import image3 from "../assets/King2.jpg";

const Lost = () => {
  const images = [image1, image2, image3];
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
          <div className=" bg-gray rounded-lg border border-gray-500 p-5 mb-2 -mt-[20%]">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p>
                "King of Tokyo" is a thrilling board game designed for 2 to 6
                players, combining strategy, dice rolling, and monster battling
                in a race to become the ultimate King of Tokyo.
              </p>
          </div>
          <div className="bg-gray rounded-lg border border-gray-500 p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Gameplay Overview</h2>
            <p>
                Players take on the roles of giant monsters, vying for control
                over Tokyo. The goal is to either be the last monster standing
                or to reach 20 Victory Points (VP) to claim victory.
              </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="container mx-auto mt-8 px-4 lg:mt-0">
            <div className="bg-gray rounded-xl shadow-md p-6 mb-5">
            <h2 className="text-2xl font-bold mb-4">How to Play King of Tokyo</h2>
          <div className="flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=RWYGlPf6IzE"
              title="King of Tokyo Gameplay Video"
              allowFullScreen
            ></iframe>
          </div>
            </div>
          </div>

          <div className="container mx-auto mt-8 px-4 mb-5">
            <div className="bg-gray rounded-xl shadow-md p-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Objective</h3>
                <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dicta, numquam dolorum, culpa animi porro eveniet perferendis autem mollitia beatae aliquid unde optio iusto officia sint earum reiciendis, modi ex.
            </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Setup</h3>
                <p className="mb-4">
              * Each player chooses a unique monster with its own special
              abilities and starts outside of Tokyo.
            </p>
            <p>
              * The game utilizes a board representing Tokyo, with spaces for
              monsters to occupy.
            </p>
            <p>* A set of dice is used to determine the monsters' actions.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Winning</h3>
                <p className="mb-4">
              The game ends when a player reaches 20 Victory Points or when they
              are the last monster standing. The player who meets either of
              these conditions is declared the King of Tokyo and wins the game.
            </p>
              </div>
              <p className="text-sm">
            Remember, house rules can vary, so be sure to clarify any specific
            rules or variations before starting the game!
          </p>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Strategy and Variations
                </h3>
                <p className="mb-4">
              "King of Tokyo" involves a mix of luck with dice rolling and
              strategic decision-making regarding when to attack, heal, or
              pursue victory points. Each monster's unique abilities can also
              influence gameplay strategies.
            </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lost;
