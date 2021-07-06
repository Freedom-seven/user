import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            gen: ""
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="userForm">
                    <label htmlFor="name"></label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="userForm">
                    <label htmlFor="email"></label>
                    <input type="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="userForm">
                    <label htmlFor="gen"></label>
                    <input type="number" value={this.state.number} onChange={this.handleChange} />
                </div>

                <div className="submit">
                    <button>Register</button>
                </div>

            </form>
        );
    }
}

export default AddForm;
