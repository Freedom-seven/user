import React from 'react';
import User from './User';

const UserList = ({users}) => {
    const userList = users.map((user) => {
        return (
         <User user={user} />
        )
    });

    return (
        <div>
            {userList}
        </div>
    );
}

export default UserList;
