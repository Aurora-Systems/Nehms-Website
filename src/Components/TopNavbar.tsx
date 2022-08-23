import { Navbar,Container,Nav } from "react-bootstrap";
import logo from "../assets/img/logoOne.png"

const TopNavbar=()=>{
    return(
        <div className="container-fluid">
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} width="100" alt="Nehms Construction"/>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Services</Nav.Link>
                            <Nav.Link>Projects</Nav.Link>
                            <Nav.Link>Gallery</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
}

export default TopNavbar;
