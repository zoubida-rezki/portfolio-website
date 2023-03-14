import React from 'react';
import {MenuList} from "../helpers/MenuList.js";
import Menuitem from '../components.js/Menuitem.js';
import "../styles/Menu.css"
function Projects() {
  // how the hell am i gonna link all my projects
  // summery of code nad toools implemented in it 
  // screnn shot/ demo
  // code visible directlly ?????
  // git hub link

  return (
    <div className='menu'>
    <h1 className='menuTitle'> My Projects </h1>
    <div className='menuList'>
{MenuList.map((menuitem,key)=>{
return(
    <Menuitem key={key} image={menuitem.image} name={menuitem.name} link= {menuitem.link} />
);

})}
    </div>
    </div>
  )
}

export default Projects