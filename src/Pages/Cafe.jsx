import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ReservationPage from "../Components/ReservationPage";

const Cafe = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Cafe A", "Cafe B", "Cafe C"];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Cafe</h1>

        {/* Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="dropdown"
            className="block text-sm font-medium text-gray-700"
          >
            Select a cafe:
          </label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
          >
            <option value="" disabled>
              Select a cafe
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
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
