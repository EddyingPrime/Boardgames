import { useState } from "react";
import axios from "axios";

const AddBoardGameForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    number_of_players: 0,
    time_playing: 0,
    age: 0,
    image: null, // Added for image
  });

  const handleChange = (e) => {
    // If the field is an image, set it to the file itself
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use FormData to handle file uploads
      const formDataWithImage = new FormData();
      formDataWithImage.append("title", formData.title);
      formDataWithImage.append("description", formData.description);
      formDataWithImage.append("number_of_players", formData.number_of_players);
      formDataWithImage.append("time_playing", formData.time_playing);
      formDataWithImage.append("age", formData.age);
      formDataWithImage.append("image", formData.image);

      // Make a POST request to your API endpoint to add a new board game
      await axios.post(
        "http://localhost:8000/api/boardgames",
        formDataWithImage
      );

      // Optionally, you can redirect or show a success message
      console.log("Board game added successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error adding board game:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="title"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Players:
        <input
          type="number"
          name="number_of_players"
          value={formData.number_of_players}
          onChange={handleChange}
        />
      </label>
      <label>
        Time Playing (in minutes):
        <input
          type="number"
          name="time_playing"
          value={formData.time_playing}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input type="file" name="image" onChange={handleChange} />
      </label>
      <button type="submit">Add Board Game</button>
    </form>
  );
};

export default AddBoardGameForm;
