import React, { Component } from 'react';
import User from "./Component/User";

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
               <User user={user} key={index} />
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