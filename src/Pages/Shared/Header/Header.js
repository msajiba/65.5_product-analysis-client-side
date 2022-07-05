import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
    
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/">PRODUCT</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home"> Home </Nav.Link>
                    <Nav.Link as={Link} to="/addproduct"> Add Product </Nav.Link>
                    <Nav.Link as={Link} to="/manageproduct"> ManageProduct </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                    <Nav.Link as={Link} to="/login"> Register </Nav.Link>
                </Nav>

                </Container>
            </Navbar>

        </div>
    );
};

export default Header;