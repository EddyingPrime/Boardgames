
const Nucleum = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="mb-8">
          <img
            className="w-full h-48"
            src="src/assets/Nucleum.png"  
            alt="Picture"
          />
        </div>
        <div className="flex justify-center space-x-8">
          <div className="w-1/2 bg-gray-300 border p-6 mx-auto">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p>When Elsa von Frühlingfeld presented her invention to King Frederik Augustus II of Saxony, people thought it was trickery. She used the recently isolated element Uranium to heat up a jar of water and used the resulting steam to power an engine that kept the Uranium active via a process she called “atomization.” Her device, the Nucleum, ushered in a new era of energy and prosperity over the next decades. Saxony went from a minor regional power to the hub of European science and engineering. Now, a generation later, factories are still hungry for more power, demanding bigger and more Nucleums to be built, more Uranium imported from the nearby country of Bohemia, and railways and power lines built across the country to carry the tamed power of the atoms to Saxony’s great cities. Inventors, engineers, and industrialists flock to the Saxon court, vying to be the leader in this new industrial revolution.</p>
            <p>Nucleum is a heavy euro board game in which players take role of industrialists trying to succeed during the economic and technological boom of 19th-century Saxony, fueled by the invention and spread of the Nucleum (a nuclear reactor).</p>
            <p>Players earn victory points by developing their networks, building and powering urban buildings, securing contracts, and meeting milestones (randomized endgame goals). Each player also gets unique asymmetric technologies, giving them special powers when unlocked. Gameplay is continuous; players take turns one after another with no rounds or phases.</p>
            <p>—description from the publisher</p>
          </div>
          <div className="w-1/2 bg-gray-300 p-6 mx-auto">
            <h2 className="text-xl font-bold mb-2">Game Rules</h2>
            <p></p>
          </div>
        </div>
  
        <div className="mt-8">
          <iframe
            className="w-full h-96"
            src="https://www.youtube.com/embed/iaPTVQfFW9M"
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Nucleum;
  