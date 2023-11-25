import { useState } from "react";
import UnoImage from "../assets/Uno.jpg";
import UnoBg from "../assets/Unobg.jpg";
import Image1 from "../assets/Uno1.jpg";
import Image2 from "../assets/Uno2.jpg";
import Image3 from "../assets/Uno3.jpg";

const images = [Image1, Image2, Image3];

const Unopage = () => {
  return (
    <>
      <div
        className="bg-cover bg-center p-6"
        style={{ backgroundImage: `url(${UnoBg})` }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <div className="p-4">
              {/* <img src={UnoImage} alt="" className="w-[300px] h-auto" /> */}
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <div className="bg-white border border-gray-500 p-4">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p>
                Uno is a fast-paced card game designed for 2 to 10 players,
                though it's most enjoyable with 3 to 7 players. The game is
                played with a specialized deck of cards and follows simple yet
                engaging rules.
              </p>
            </div>
            <div className="bg-white border border-gray-500 p-4">
              <h2 className="text-xl font-bold mb-2">Gameplay Overview</h2>
              <p>
                Players aim to be the first to get rid of all the cards in their
                hand. The deck consists of cards in four colors: red, blue,
                green, and yellow, with each color containing numbered cards (0
                to 9) and special action cards.
              </p>
            </div>
            <div className="bg-white border border-gray-500 p-4">
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
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-5 gap-4">
          {images.map((imageSrc, index) => (
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
    </>
  );
};

export default Unopage;
