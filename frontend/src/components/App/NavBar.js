import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNavBar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="px-5 justify-content-space-between"
        >
            <Navbar.Brand href="/">Album-tracks</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
                id="responsive-navbar-nav"
                className="d-flex flex-row-reverse"
            >
                <Nav>
                    <Nav.Link href="/Albums">Albums</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavBar;
