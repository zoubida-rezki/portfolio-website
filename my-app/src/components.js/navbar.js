import React, {useState} from 'react';
// import logo from '../assets/pizzaLogo.jpg';
import{Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
// import { Button } from '@mui/material';


function Navbar() {
const [openLinks, setOpenLinks] = useState(false)
const toggleNavbar =()=>{
 setOpenLinks(!openLinks);
}
  return (
    <div className='navbar'>
        <div className='leftSide' id = {openLinks ? "open": "close"}>
           <h1>Zoubida Rezki</h1>
            {/* <img src={logo} alt="pizza"/> */}
            <div className='hiddenLinks'>
            <Link to= "/">home </Link>
            <Link to= "/Projects">Projects </Link>
            <Link to= "/about">about </Link>
            <Link to= "/contact">contact </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to= "/">home </Link>
            <Link to= "/Projects">Projects </Link>
            <Link to= "/about">about </Link>
            <Link to= "/contact">contact </Link>
<button onClick={toggleNavbar}>
  <ReorderIcon/>
</button>
        </div>
        </div>
  )
}

export default Navbar