import React from 'react';
import { useState } from 'react';

const login = () => {

    const [usernmae,setusernames] =useState("")
    return (
        <div>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="username" />
            <button type="submit">login in user</button>
        </div>
    );
};

export default login;