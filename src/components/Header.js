import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from 'react-bootstrap';

const Header = () => {
  return (
    <Container  fluid >
    <Navbar
    collapseOnSelect
    expand='lg'
    className='bg-transparent '
    data-bs-theme='dark'
    

>
        <NavbarBrand>*</NavbarBrand>
        <Navbar.Toggle className='ml-auto'  aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto'>
                <Nav.Link active href='#about'>About</Nav.Link>
                <Nav.Link href='#skills'>Skills</Nav.Link>
                <Nav.Link href='#projects'>Projects</Nav.Link>
                <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
</Navbar>
</Container>
  )
}

export default Header