import React, { useState } from 'react';


const login = () => {

    const [usernmae,setusernames] =useState("")
    

    return (
        <div>
            <input type="text" placeholder="username" name="username" onChange={(e)=>setusernames(e.target.value)} />
            <input type="password" placeholder="password" name="username" />
            <button type="submit">login in user</button>
        </div>
    );
};

export default login;