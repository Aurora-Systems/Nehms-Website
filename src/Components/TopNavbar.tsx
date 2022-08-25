import { Navbar,Container,Nav } from "react-bootstrap";
import logo from "../assets/img/logoOne.png"

const TopNavbar=()=>{
    return(
            <Navbar collapseOnSelect expand="sm"  bg="light">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logo} width="100" alt="Nehms Construction"/>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Container>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className="nav-highlight" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-highlight" href="about">About</Nav.Link>
                        <Nav.Link className="nav-highlight" href="services">Services</Nav.Link>
                        <Nav.Link className="nav-highlight" href="projects">Projects</Nav.Link>
                        <Nav.Link className="nav-highlight" href="gallery">Gallery</Nav.Link>
                        <Nav.Link className="nav-highlight" href="contact-us">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        
        
    );
}

export default TopNavbar;
