import React from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/" className="mx-4 text-black" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Home</NavLink>

                    <NavLink className="mx-4 text-black" to="/competitions" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>competions</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;