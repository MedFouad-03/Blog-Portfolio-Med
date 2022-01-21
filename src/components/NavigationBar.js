import React from "react";
import { Navbar, Container, Nav, Button} from 'react-bootstrap'
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import MyButon from "./Buttons";
import Log from '../logs.png'
import Style from 'styled-components'
import { useNavigate } from "react-router-dom";

const MyNav = Style.div`
box-shadow: 10px 5px 5px pink;

.link{
  text-decoration: none;
  color: white;
  &:hover{
    color: red;
  }
}

`

function NavigationBar(){
  let navigate = useNavigate();
    return(
        <MyNav>
        <Navbar bg="success" shadow="lg" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#" onClick={() =>{navigate("/description")}}>
    <a href="#">
        <img
        src={Log}
        width="120"
        height="40"
        className="d-inline-block mt-3"
        alt="React Bootstrap logo"
      /></a>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link to="/Touch" active><Link to="/website" className="link">Services</Link></Nav.Link>
      <Nav.Link href="#portfolio" active><Link to="/portfolio" className="link">Portfolio</Link></Nav.Link>
      <Nav.Link href="#about" active><Link to="/about" className="link">About</Link></Nav.Link>
      <Nav.Link href="#" active><Link to="/SquareSpace" className="link">Blog</Link></Nav.Link>
    </Nav>
    <Nav className="d-none d-sm-inline icon">
          <FaLinkedin className="ms-4" href="#"/>
          <FaTwitter className="mx-2"/>
          <FaFacebook className="me-4"/>
    </Nav>
    
      
        
        <Button onClick={() => {navigate('/touch')}} className="btn btn-dark"><MyButon text='work with me' /></Button>
    
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
        </MyNav>
    )
}
export default NavigationBar;