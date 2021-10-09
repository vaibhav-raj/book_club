import React from "react";
import { Route, Switch } from 'react-router-dom'
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import BookPage from "./Pages/BookPage";
import Home from "./Pages/Home";


const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
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
