import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import NavbarMain from "./Components/Header/NavbarMain";
import BookPage from "./Pages/BookPage";
import HomePage from "./Pages/HomePage";
import { useSelector } from 'react-redux'


const App = () => {

    const state = useSelector(state => state.auth)
    // console.log('state:', state)
    const { isAuth } = state
    const { role } = state.user

    if (role === 'provider' && isAuth) {
        <Redirect to='/provider' />
    }
    if (role === 'buyer' && isAuth) {
        <Redirect to='/' />
    }

    return (
        <div>
            <NavbarMain />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/books">
                    <BookPage />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
            </Switch>

        </div>
    );
};

export default App;
