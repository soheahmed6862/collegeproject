import { Button } from '@material-ui/core';
import { FormatAlignCenter, Input, Title } from '@material-ui/icons';
import React from 'react';
import "./text.css"
const Test = () => {
    return (
        <div className="conatiner">

        <div className="card">

            <div className="inner_box">
                
                <div className="card_font">
                <Title>CREATE AN ACCOUNT</Title>
        <form >
          <input placeholder="name" type="text"  name="username" />
                
            
         
          <input placeholder="email" type="email" name="email" />
          <input placeholder="pasword" type="password" name="password" />
         
  
           
          {/* <Input placeholder="name" type="text" name="username" value={input.username} onChange={(e)=>controlinput(e)} required/> */}
     
          <agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </agreement>
          <Button >CREATE</Button>
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