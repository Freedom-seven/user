import React from 'react';

const User = (user, index) => {
    return (
        <div className="user" key={index}>
            <h1>Name: {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Gen: {user.gen}</p>
            <hr />
        </div>
    )
}

export default User;
