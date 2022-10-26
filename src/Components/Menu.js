import React from 'react';
import { useState } from 'react';
import Block from './Block';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 
  const [name, setColor]= useState(false)
  
    
  
    return (
      <div className="colorOptions" >
          <Color color="red" handleClick={props.func}/>
          <Color color="blue" handleClick={props.func}/>
          <Color color="green" handleClick={props.func}/>
          <Color color="yellow" handleClick={props.func}/>
      </div>
    );
   }

export default Menu;