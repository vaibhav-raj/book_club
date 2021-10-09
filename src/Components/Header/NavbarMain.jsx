import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import styles from "./navbarmain.module.css";

export const NavbarMain = () => {
    return (
        <>
            <Navbar style={{ background:"#222831"}}  variant="dark" expand="lg" sticky="top">
                <Container className={styles.navbar_main}>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://img.icons8.com/color/24/000000/read.png"
                            width="30"
                         
                            className="d-inline-block align-top"
                        />{" "}
                        <span>BooksClub</span>
                    </Navbar.Brand>
                    <Nav
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {/* <Button className={styles.nav_button_add} variant="primary">
                            Add Book
                        </Button>{" "} */}
                        <ul className={styles.list_right_nav}>
                            <li className="nav-item">
                                <Navbar.Brand href="#home">
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/color/48/000000/administrator-male-skin-type-7.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                            </li>
                            <li className="nav-item">
                                <Navbar.Brand href="#home">
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/color/24/000000/exit.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>

                                {/* <NavLink className="nav-link" to="/signup">Signup</NavLink> */}
                            </li>
                        </ul>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarMain;
