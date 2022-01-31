import React from 'react';

const login = () => {
    return (
        <div>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="username" />
            <button type="submit">login in user</button>
        </div>
    );
};

export default login;