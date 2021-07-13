import React, { Component } from 'react';
import AddForm from "./Component/AddForm"
import UserList from './Component/UserList';

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
        
         
        
        return (
            <div style={{marginLeft: "5rem"}}>
                <AddForm addUser={this.handleAddUser} />
                <UserList users={this.state.users} />
            </div>
            
        );
    }
}

export default App;
