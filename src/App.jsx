import React, { Component } from "react";
import AddForm from "./Component/AddForm";
import UserList from "./Component/UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  handleAddUser = (newUser) => {
    newUser.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, newUser],
    });
  };

  handleDeleteUser = (userId) => {
    const savedUsers = this.state.users.filter((user) => {
      return user.id !== userId;
    });
    this.setState({ users: savedUsers });
  };

  handleEditUser = (updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <AddForm addUser={this.handleAddUser} />
          </div>
          <div className="col-8">
            <UserList
              users={this.state.users}
              deleteUser={this.handleDeleteUser}
              editUser={this.handleEditUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
