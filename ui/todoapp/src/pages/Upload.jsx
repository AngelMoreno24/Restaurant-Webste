import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

    // Handle note input change
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("newNotes", description);
    

    try {
      const response = await axios.post("http://localhost:5071/api/TodoApp/AddNoteWithImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };








  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUpload;