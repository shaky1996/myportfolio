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
                <Nav.Link  href='#about'>SKILLS</Nav.Link>
                <Nav.Link href='#skills'>PROJECTS</Nav.Link>
                <Nav.Link href='#projects'>ABOUT</Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
        
</Navbar>
</Container>
  )
}

export default Header