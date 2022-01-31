import { Button } from '@material-ui/core';

import React from 'react';
import "./text.css"
const Test = () => {
    return (
        <div className="conatiner">

        <div className="card">

            <div className="inner_box">
                
                <div className="card_font">
                <title>CREATE AN ACCOUNT</title>
        <form >
          <input placeholder="name" className="input_box" type="text"  name="username" />
                
            
         
          <input placeholder="email" type="email" name="email" />
          <input placeholder="pasword" type="password" name="password" />
         
  
           
          {/* <Input placeholder="name" type="text" name="username" value={input.username} onChange={(e)=>controlinput(e)} required/> */}
     
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