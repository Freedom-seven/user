import React, { Component } from 'react';
import User from "./Component/User";
import AddForm from "./Component/AddForm"

class App extends Component {
    constructor(props) {
        super(props)
        this.state ={
        users: []
    }
    }

    handleAddUser = (newUser) => {
        this.setState({
            users: [...this.state.users, newUser]
        })
    }

    render() {
        
          const users = this.state.users.map((user, index) => {
              return (
               <User user={user} key={index} />
              )
          });
        
        return (
            <div style={{marginLeft: "5rem"}}>
                <AddForm addUser={this.handleAddUser} />
                {users}
            </div>
            
        );
    }
}

export default App;
