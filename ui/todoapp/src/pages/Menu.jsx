import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Add = () => {

  const [book, setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault();
    try{
      //await axios.post("http://localhost:5000/books", book)
      //navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(book)
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
        <div>

        </div>
      </div>
  )
}

export default Add




