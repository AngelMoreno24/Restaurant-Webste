import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Add = () => {

  const [foods, setFoods] = useState({ notes: [] })
  const [cartItems, setCartItems] = useState([]);



  const API_URL="http://localhost:5071/"

  /////////////////////////////////////////////////
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
          setCartItems(savedCart);
        }
        
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
      
    fetchMenu()
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
    alert(`Added ${item.name} to cart`);

    // Check if the item is already in the cart
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
  
    let updatedCart;
    if (existingItem) {
      // If the item exists, update its quantity
      updatedCart = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }
  
    // Update the cart state
    setCartItems(updatedCart);
    
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  
    console.log("Cart items:", updatedCart);
  }

  console.log(foods)
  console.log(foods.notes)
  const food = foods.notes;


  return (
      <div className="background">
        <h2>Menu</h2>
        <div>
          <button><Link to={"/"}>Home</Link></button>
          <button><Link to={"/Menu"}>Menu</Link></button>
          <button><Link to={"/Cart"}>Cart</Link></button>
          <button>asd</button>
        </div>

        <div className='bar'>
        </div>

        <div class="side-border">
              <div class="container">
                {food.map(food=>

                  <div class="card">
                    <div >
                      <div class="food-Description">
                        <b>{food.description}</b>
                      </div>

                      <div >
                        <img class="food-Image" src={"http://localhost:5071"+ food.ImageUrl} alt="" />
                      </div>
                      
                      <button class="cart-Button" onClick={() => handleClick({ id: food.id, name: food.description, price: 10 })}>+</button>

                    </div>
                  </div>

                )}
              </div>
        </div>

      </div>
  )
}

export default Add




