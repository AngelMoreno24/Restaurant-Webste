import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
          <button><Link to={"/"}>Home</Link></button>
          <button><Link to={"/Menu"}>Menu</Link></button>
          <button><Link to={"/Cart"}>Cart</Link></button>
          <button>asd</button>
        </div>
    )
}
export default Navbar




