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
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AddForm;
