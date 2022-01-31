import { Button } from '@material-ui/core';

import React from 'react';
import "./text.css"
const Test = () => {
    return (
        <div className="conatiner">

        <div className="card">

            <div className="inner_box">
                
                <div className="card_font">
               <p>create a account</p>
        <form >
          <input placeholder="name" className="input_box" type="text"  name="username" />
                
            
         
          <input placeholder="email"  className="input_box"  type="email" name="email" />
          <input placeholder="pasword"  className="input_box"  type="password" name="password" />
         
  
 
     
          <button >CREATE</button>
        </form>

                </div>
                <div className="card_back">

                </div>

            </div>
        </div>

     
    </div>
    );
};

export default Test;