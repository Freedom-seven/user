import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import PrivateRoute from "./ProtectedRoute";
import Register from './pages/Register';
import Login from './pages/Login';


 const Router = () => {
    return (
        <BrowserRouter>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        
        </BrowserRouter>
    )
}

export default Router;
