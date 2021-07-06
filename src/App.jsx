import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state =[
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
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default App;
