import React from "react";
import { Route, Switch } from 'react-router-dom'
import NavbarMain from "./Components/Header/NavbarMain";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import BookPage from "./Pages/BookPage";
import HomePage from "./Pages/HomePage";


const App = () => {
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
