import { useState } from "react";


const cafes = ['Cafe A', 'Cafe B', 'Cafe C']; // Replace with your cafe list

const ReservationPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeat, setSelectedSeat] = useState('');
  const [selectedCafe, setSelectedCafe] = useState('');
  const [guestName, setGuestName] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSeatChange = (e) => {
    setSelectedSeat(e.target.value);
  };

  const handleCafeChange = (e) => {
    setSelectedCafe(e.target.value);
  };

  const handleGuestNameChange = (e) => {
    setGuestName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation details:', {
      date: selectedDate,
      time: selectedTime,
      seat: selectedSeat,
      cafe: selectedCafe,
      guestName: guestName,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-3 bg-white shadow-md rounded-md mb-5">
      <h2 className="text-xl font-semibold mb-4">Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cafe" className="block text-sm font-semibold mb-2">
            Select Cafe:
          </label>
          <select
            id="cafe"
            value={selectedCafe}
            onChange={handleCafeChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select a cafe</option>
            {cafes.map((cafe, index) => (
              <option key={index} value={cafe}>
                {cafe}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold mb-2">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-semibold mb-2">
            Select Time:
          </label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="guestName" className="block text-sm font-semibold mb-2">
            Guest Name:
          </label>
          <input
            type="text"
            id="guestName"
            value={guestName}
            onChange={handleGuestNameChange}
            placeholder="Enter guest name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-orange text-black py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;
