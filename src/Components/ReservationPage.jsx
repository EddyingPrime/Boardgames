import { useState } from "react";

const ReservationPage = ({ option }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the reservation submission
    console.log("Reservation submitted:", { name, date, time });
    // Add further logic like sending the reservation to a backend or displaying a confirmation message
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{option} Reservation Page</h2>
      <form onSubmit={handleReservationSubmit} className="mt-4">
        {/* Form fields */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Reservation Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Reservation Time:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark focus:outline-none focus:shadow-outline-orange active:bg-orange-darker"
        >
          Submit Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;
