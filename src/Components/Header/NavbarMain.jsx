import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'


import styles from "./navbarmain.module.css";

export const NavbarMain = () => {

    const state = useSelector(state => state.auth)
    const { isAuth } = state
    const { role } = state.user
    return (
        <>
            {role === "provider" ? <Navbar style={{ background: "#222831" }} variant="dark" expand="lg" sticky="top" className={styles.navbar_main}>
                <NavLink to="/provider">
                    <img
                        alt=""
                        src="https://img.icons8.com/color/24/000000/read.png"
                        width="30"
                        className="d-inline-block align-top" />
                    <span>BooksClub</span>
                </NavLink>
                <Nav
                    style={{
                        gap: "14px",
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <Link to="/login"><Button className={styles.nav_button_add} style={{ background: "#00ADB5" }} >Login</Button></Link>
                    <Link to="/signup"><Button className={styles.nav_button_add} style={{ background: "#00ADB5" }} >Signup</Button></Link>
                </Nav>
            </Navbar>
                : <Navbar style={{ background: "#222831" }} variant="dark" expand="lg" sticky="top" className={styles.navbar_main}>
                    <NavLink to="/">
                        <img
                            alt=""
                            src="https://img.icons8.com/color/24/000000/read.png"
                            width="30"
                            className="d-inline-block align-top" />
                        <span>BooksClub</span>
                    </NavLink>
                    {!isAuth && <NavLink to="/books">Books</NavLink>}
                    <Nav
                        style={{
                            gap: "14px",
                            display: "flex",
                            alignItems: "center",
                        }}>
                        <Link to="/login"><Button style={{ background: "#00ADB5" }} className={styles.nav_button_add}>Login</Button></Link>
                        <Link to="/signup"><Button style={{ background: "#00ADB5" }} className={styles.nav_button_add}>Signup</Button></Link>
                    </Nav>
                </Navbar>}
        </>
    );
};

export default NavbarMain;
