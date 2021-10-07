import React from "react";
import AddForm from "../Component/AddForm";
import UserList from "../Component/UserList";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";
import Button from "react-bootstrap/Button";
import '../App.css';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        className="logout"
        variant="secondary"
        onClick={() => dispatch(logout(logout))}
      >
        Logout
      </Button>{" "}
      <div className="container user">
        <div className="row">
          <div className="col-sm-12 col-md-4 ">
            <AddForm />
          </div>
          <div className="col-sm-12 col-md-8">
            <UserList className="user-lists" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
