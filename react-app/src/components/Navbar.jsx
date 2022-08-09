import React  from 'react';
import { Navbar, Nav, NavDropdown,Button, Container} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


//import DisplayTable from './View';
//import Landing from './Landing';
import Tabledata from './Tabledata';
import Login from "./Login";
import SignUp from "./Signup";
function NavbarComp() {
    
        return (
            <Router>
                <div>
                    
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/"><h1>APP NAME</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                        <NavDropdown title="View" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">Securities</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/viewtrades">Trades </NavDropdown.Item>
                        </NavDropdown>  
                                
                         <Nav.Link as={Link} to="/watchlist">Watchlist</Nav.Link>

                        </Nav>
                        <Nav>
                            <Button className="me-2" as={Link} to={'/sign-in'}>Log In</Button>
                            <Button className="me-2" as={Link} to={'/sign-up'}>Sign Up</Button>
                        </Nav>
                            
                        </Navbar.Collapse>
                        </Container> 
                    </Navbar>
                    
                </div>
                <div>


                    <Routes>
                    

                    <Route exact path="/" element={<Tabledata/>}/>
                    <Route path="/sign-in" element={<Login/>}/>
                    <Route path="/sign-up" element={<SignUp/>} />


                    {/* <Route exact path="/" element={<Landing/>}/> */}
                    </Routes>
                </div>
            </Router>
        )
    
}

export default NavbarComp;

