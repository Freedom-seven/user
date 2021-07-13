import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';

const User = ({user, deleteUser}) => {
    const handleDelete = (e) => {
        deleteUser(user.id)
    }
    return (
        <div className="user">
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                <ListGroup.Item>Gen: {user.gen}</ListGroup.Item>
                <div className="card-btn">
                    <button className="btn btn-success edit" >Edit</button>
                    <button className="btn btn-danger delete" onClick={handleDelete} >Delete</button>
                </div>
            </ListGroup>
        </Card>
        </div>
    );
}

export default User;
