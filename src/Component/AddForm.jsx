import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="userForm">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="userForm">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="userForm">
          <label htmlFor="gen">Gen</label>
          <input
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
        </div>

        <div className="submit">
          <button>Register</button>
        </div>
      </form>
    );
  }
}

export default AddForm;
