import React, { Component } from 'react';
import User from "./Component/User";
import AddForm from "./Component/AddForm"

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

    handleAddUser = (newUser) => {
        this.setState({
            users: [...this.state.user, newUser]
        })
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
                <AddForm addUser={this.handleAddUser} />
                {users}
            </div>
            
        );
    }
}

export default App;
