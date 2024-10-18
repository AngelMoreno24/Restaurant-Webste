import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Add = () => {

  const [foods, setFoods] = useState({ notes: [] })


  const API_URL="http://localhost:5071/"

  /////////////////////////////////////////////////
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch("http://localhost:5071/api/TodoApp/GetNotes");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFoods({ notes: data });
      } catch (error) {
        console.error("Failed to fetch notes:", error);
        // Optionally, set an error state or notify the user
      }
    }
      
    fetchAllBooks()
  },[])

  const handleDelete = async (id) => {
    try{
      await axios.delete("http://localhost:5000/books/"+id);
      window.location.reload();
    }catch(err){
      console.log(err);
    }
  }
  /*

  try {
    const response = await fetch(this.API_URL + "api/TodoApp/GetNotes");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    this.setState({ notes: data });
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    // Optionally, set an error state or notify the user
  }
  */

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFoods((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = (item) => {

      alert(`added ${item} to cart`)
  }

  console.log(foods)
  console.log(foods.notes)
  const food = foods.notes;


  return (
      <div className="App">
        <h2>Menu</h2>
        <div>
          <button><Link to={"/"}>Home</Link></button>
          <button><Link to={"/Menu"}>Menu</Link></button>
          <button>asd</button>
        </div>

        <div className='bar'>
        </div>

        <div class="side-border">
              <div class="container">
                {food.map(food=>

                  <p class="card">
                    <b>* {food.description}</b>
                    <button class="cart-Button" onClick={() => handleClick(food.description)}>+</button>
                  </p>

                )}
              </div>
        </div>

      </div>
  )
}

export default Add




