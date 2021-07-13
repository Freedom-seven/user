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
        newUser.id = Math.random().toString();
        this.setState({
            users: [...this.state.users, newUser]
        })
    };

    handleDeleteUser = (userId) => {
        
    }

    render() {  
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <AddForm addUser={this.handleAddUser} />
                    </div>
                    <div className="col-8">
                    <UserList users={this.state.users} deleteUser={this.handleDeleteUser} />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App;
