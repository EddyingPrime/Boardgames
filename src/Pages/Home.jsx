import { Link } from "react-router-dom";
import images1 from "../assets/Uno.jpg";

const Home = () => {
  // Sample data for featured games, recommended cafes, and top threads
  const featuredGames = [
    { id: 1, title: "Game 1", image: [images1] },
    { id: 2, title: "Game 2", image: "/" },
    // Add more games as needed
  ];

  const recommendedCafes = [
    { id: 1, name: "Cafe A", image: "/" },
    { id: 2, name: "Cafe B", image: "/" },
    // Add more cafes as needed
  ];

  const topThreads = [
    { id: 1, title: "Thread 1", author: "User1", comments: 10 },
    { id: 2, title: "Thread 2", author: "User2", comments: 8 },
    // Add more threads as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-4 text-orange">Welcome</h1>
        <p className="mb-8">
          🎲 Are you ready to roll the dice and experience the joy of board
          games? Look no further!{" "}
          <span className="font-bold ">Touch Grass</span> is your ultimate
          destination for all things board games and socialization.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Discover the World of Board Games
        </h2>
        <p className="mb-8">
          Explore a vast collection of board games for every taste and skill
          level. From classic strategy games to modern party favorites, we have
          it all. Whether you're a seasoned board gamer or just getting started,
          our curated selection promises endless hours of fun.
          <h5 className="m-4">👫 Connect with Friends and Family</h5>
          Board games are best enjoyed with company! Invite your friends and
          family to join you in exciting game nights. Strengthen bonds, create
          lasting memories, and share laughter as you embark on thrilling board
          game adventures together.
        </p>

        {/* Featured Games */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
          <div className="flex space-x-4">
            {featuredGames.map((game) => (
              <div key={game.id} className="flex-1">
                <Link to={`/games/${game.id}`}>
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <p className="text-gray-800 font-semibold">{game.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">
          Schedule Ahead for Cafe Reservations
        </h2>
        <p className="mb-8">
          Planning a special game night at one of our recommended cafes? Take
          advantage of our reservation feature! Schedule ahead to secure your
          spot and ensure an unforgettable gaming experience.
        </p>

        {/* Recommended Cafes */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Cafes</h2>
          <div className="flex space-x-4">
            {recommendedCafes.map((cafe) => (
              <div key={cafe.id} className="flex-1">
                <Link to={`/cafe/${cafe.id}`}>
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <p className="text-gray-800 font-semibold">{cafe.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Top Threads with Comments */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Top Threads with Comments</h2>
          <ul className="space-y-4">
            {topThreads.map((thread) => (
              <li key={thread.id}>
                <Link to={`/forums/${thread.id}`}>
                  <h3 className="text-lg font-semibold">{thread.title}</h3>
                  <p className="text-gray-600">
                    By {thread.author} - {thread.comments} Comments
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
