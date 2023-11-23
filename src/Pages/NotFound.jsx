<<<<<<< HEAD
import Uno from  "../assets/Uno.jpg"
import Uno1 from  "../assets/Uno1.jpg"
import Uno2 from  "../assets/Uno2.jpg"
import Uno3 from  "../assets/Uno3.jpg"

const image = [
  '/assets/Uno1.jpg',
  'Uno1.jpg',
  'Uno2.jpg',
  'Uno3.jpg',

];


const NotFound = () => {
  return (
    <>
    <div className="bg-orange p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <div className="border border-gray-500 p-4">
            <img src={Uno} alt="" className="w-full h-30" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-white border border-gray-500 p-4">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p>
            Uno is a fast-paced card game designed for 2 to 10 players, though it's most enjoyable with 3 to 7 players. The game is played with a specialized deck of cards and follows simple yet engaging rules.
            </p>
          </div>
          <div className="bg-white border border-gray-500 p-4">
            <h2 className="text-xl font-bold mb-2">Gameplay Overview</h2>
            <p>
            Players aim to be the first to get rid of all the cards in their hand. The deck consists of cards in four colors: red, blue, green, and yellow, with each color containing numbered cards (0 to 9) and special action cards.
            </p>
          </div>
          <div className="bg-white border border-gray-500 p-4">
            <h2 className="text-xl font-bold mb-2">Gameplay Mechanics:</h2>
            <p>
            *Players take turns playing a card from their hand that matches the top card of the discard pile in either number, color, or action.
            </p>
            <p>*If a player doesn't have a playable card, they must draw from the draw pile. If the drawn card can be played, they can play it; otherwise, their turn ends.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Images</h2>
    <div className="grid grid-cols-5 gap-4">
      {image.map((image, index) => (
        <div key={index} className="border border-gray-400 p-2">
          <img src={image} alt={`Image ${index}`} className="w-full h-auto" />
        </div>
        
      ))}
    </div>
  </div>
  <div className="container mx-auto mt-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Objective</h3>
          <p className="mb-4">
            The objective of Uno is to be the first player to get rid of all the cards in your hand.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Setup</h3>
          <p className="mb-4">
            Shuffle the deck of Uno cards. Deal 7 cards to each player. Place the remaining deck face
            down as the draw pile. Flip the top card from the draw pile to start the discard pile.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Winning</h3>
          <p className="mb-4">
            The first player to play all their cards wins the round. They receive points based on the
            remaining cards in opponents' hands. The game continues until a player reaches a
            predetermined points goal.
          </p>
        </div>
        <p className="text-sm">
          Remember, house rules can vary, so be sure to clarify any specific rules or variations
          before starting the game!
        </p>
      </div>
    </div>
  </>
  );
};

export default NotFound;
=======
export default function NotFound() {
  return <div>NotFound</div>;
}
>>>>>>> 7b63a4fd76d2c570f5b1dd87a026abf350cbd4ff
