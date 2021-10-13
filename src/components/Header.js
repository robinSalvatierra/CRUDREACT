import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link >Products</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/producto/nuevo">
                        <Nav.Link >Add Products</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
