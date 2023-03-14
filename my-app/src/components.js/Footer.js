import React from 'react';
import {Instagram} from "@mui/icons-material";
import {Twitter} from "@mui/icons-material";
import {Facebook} from "@mui/icons-material";
import {YouTube} from "@mui/icons-material";
// import Instagram from "@mui/icons-material";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <Instagram/>
          <Facebook/>
          <YouTube/>
          <Twitter/>
        </div>
      <p>&copy; zoubida rezki </p>    
    </div>
  )
}

export default Footer