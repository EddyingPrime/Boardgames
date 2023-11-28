import { Link, Route, Routes } from "react-router-dom";
import ReservationPage from "../Components/ReservationPage";

const Cafe = () => {
  const options = ["Cafe[]", "Cafe B", "Cafe C"];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Cafe</h1>

        {/* Dropdown */}
        <div className="mb-4">
          <div className="flex space-x-4">
            {options.map((cafe) => (
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

        {/* React Router Route for Reservation Page */}
        <Routes>
          <Route path={`/:cafeName`} element={<ReservationPage />} />
        </Routes>

        {/* Additional content for your Cafe page */}
      </div>
    </div>
  );
};

export default Cafe;
