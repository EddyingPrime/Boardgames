import King from "../assets/King.jpg";

const image = ["/assets/Uno1.jpg"];

const Uno = () => {
  return (
    <>
      <div className="bg-orange p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <div className=" border-gray-500 p-4">
              <img src={King} alt="" className="w-full h-30" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-white border border-gray-500 p-4">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p>
                "King of Tokyo" is a thrilling board game designed for 2 to 6
                players, combining strategy, dice rolling, and monster battling
                in a race to become the ultimate King of Tokyo.
              </p>
            </div>
            <div className="bg-white border border-gray-500 p-4">
              <h2 className="text-xl font-bold mb-2">Gameplay Overview</h2>
              <p>
                Players take on the roles of giant monsters, vying for control
                over Tokyo. The goal is to either be the last monster standing
                or to reach 20 Victory Points (VP) to claim victory.
              </p>
            </div>
            <div className="bg-white border border-gray-500 p-4">
              <h2 className="text-xl font-bold mb-2">Gameplay Mechanics:</h2>
              <p>
                * Players roll a set of six custom dice on their turn, aiming to
                get specific results that enable them to attack, heal, gain
                energy, or earn victory points.
              </p>
              <p>
                * Dice outcomes include claws for attacking other monsters,
                hearts for healing, energy for buying power-up cards, and
                numbers for earning victory points.
              </p>
              <p>
                * Monsters can enter Tokyo, earning victory points for doing so,
                but also risking being attacked by all other monsters outside
                Tokyo.
              </p>
              <p>
                * While in Tokyo, a monster accumulates victory points for each
                turn spent there but can't heal unless they roll hearts.
              </p>
              <p>
                * Attacking other monsters inflicts damage, potentially forcing
                them out of Tokyo or even eliminating them from the game.
              </p>
              <p>
                * Players can purchase power-up cards with accumulated energy,
                enhancing their monsters' abilities or providing special
                one-time effects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Images</h2>
        <div className="grid grid-cols-5 gap-4">
          {image.map((image, index) => (
            <div key={index} className="border border-gray-400 p-2">
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4 mb-5">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Objective</h3>
            <p className="mb-4">
              The objective of Uno is to be the first player to get rid of all
              the cards in your hand.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Setup</h3>
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
            <h3 className="text-lg font-semibold mb-2">Winning</h3>
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
            <h3 className="text-lg font-semibold mb-2">
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
    </>
  );
};

export default Uno;
