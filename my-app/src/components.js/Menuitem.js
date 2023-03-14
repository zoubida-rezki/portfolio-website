import React from 'react';
// import MenuList from '../helpers/MenuList';

function Menuitem({image,name,link}) {
  return (
    <div className='menuItem'>
    <div style ={{backgroundImage: `url(${image})`}}></div>    
        {/* <h1>{name}</h1> */}
        <h1>{name}</h1>
        <a href={link}  target="_blank" rel="noreferrer"> link</a> 
        {/* <h1>{z} bgfskjb</h1> */}
       {/* <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"> <button >youtube link</button></a>
       <a href="https://www.youtube.com/">click me</a>
       <a href="https://github.com/zoubida-rezki/card-game">  idk</a> */}
       {/* <button onClick={link}>{link}ugdfkh</button>
       <a href={link} target="_blank" rel="noreferrer"> <button >link</button></a> */}
      
    </div>
  )
}

export default Menuitem