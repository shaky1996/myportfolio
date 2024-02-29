import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from 'react-bootstrap';

const Header = () => {
  return (
    <Container  fluid >
    <Navbar
    as="nav"
    collapseOnSelect
    expand='lg'
    className='bg-transparent '
    data-bs-theme='dark'
    data-bs-spy="scroll"
    

>
        <NavbarBrand></NavbarBrand>
        <Navbar.Toggle className='ml-auto'  aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto'>
                <Nav.Link  href='#techstack' className='navLink' active={false}>SKILLS</Nav.Link>
                <Nav.Link href='#projects' className='navLink' active={false}>PROJECTS</Nav.Link>
                <Nav.Link href='#about' className='navLink' active={false}>ABOUT</Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
        
</Navbar>
</Container>
  )
}

export default Header