import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state ={
        users: [
            {
                name: "Freedom",
                email: "example@email.com",
                gen: 18
                
            },
            {
                name: "Bill",
                email: "bill@email.com",
                gen: 5
            },
            {
                name: "Emma",
                email: "emma@email.com",
                gen: 19
            }
        ]
    }
    }
    render() {
        
          const users = this.state.users.map((user, index) => {
              return (
                <div className="user" key={index}>
                    <h1>Name: {user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>Gen: {user.gen}</p>
                    <hr />
                </div>
              )
          });
        
        return (
            <div>
                {users}
            </div>
            
        );
    }
}

export default App;
