import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Add = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart'));
      if (savedCart) {
        setCartItems(savedCart);
      }
    }, []);

    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => {
            
            const updatedCart = prevCartItems.map(item => {
                if (item.id === itemId) {
                    // If the item exists, decrease its quantity
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        // If quantity is 1, remove the item
                        return null; // Mark item for removal
                    }
                }
                return item; // Return the item unchanged
            }).filter(item => item !== null); // Filter out any null items (i.e., those we want to remove)

            localStorage.setItem('cart', JSON.stringify(updatedCart));  // Update localStorage
            return updatedCart;  // Update state
        });
    };



    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    console.log(cartItems);

  return (
      <div className="background">
        <h2>Menu</h2>
        <div>
          <button><Link to={"/"}>Home</Link></button>
          <button><Link to={"/Menu"}>Menu</Link></button>
          <button>asd</button>
        </div>

        <div className='bar'>
        </div>

        <div className="side-border">
            <h1>Your Cart</h1>
                {cartItems.length === 0 ? (
                <p>No items in cart</p>
                ) : (
                cartItems.map(item => (
                <div key={item.id}>
                    id={item.id} {item.name} x{item.quantity} - ${item.price}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                ))
                )

            }
            <h2>{"total price: $"+totalPrice}</h2>
        </div>

      </div>
  )
}

export default Add




