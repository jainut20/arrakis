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
import SecTabledata from './SecTabledata';
import Login from "./Login";
import SignUp from "./Signup";
import TradeTabledata from './TradeTabledata';
function NavbarComp() {
    
        return (
            <Router>
                <div>
                    
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                    
                    <Navbar.Brand href="#home">
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqoXvD_MV9TozNgVaOen1vOreoMRvBSoeP1qtdDdZ1RF_ZUvI3TdY_az-omHcU524g84&usqp=CAU"
                        
                        height="70"
                        className="d-inline-block align-top"
                        alt="logo"
                        />
                    </Navbar.Brand>
                    
                        {/* <div className='row'></div> */}
                        <Navbar.Brand href="/"><h1>APP NAME</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                        <NavDropdown  title="View" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">Securities</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/viewtrades">Trades </NavDropdown.Item>
                        </NavDropdown>  
                                
                         <Nav.Link as={Link} to="/watchlist">Watchlist</Nav.Link>

                        </Nav>
                        <Nav>
                            <Button style={{ backgroundColor : 'darkblue'}} className="me-2" as={Link} to={'/sign-in'}>Log In</Button>
                            <Button style={{ backgroundColor : 'darkblue'}} className="me-2" as={Link} to={'/sign-up'}>Sign Up</Button>
                        </Nav>
                            
                        </Navbar.Collapse>
                       
                    </Navbar>
                    
                </div>
                <div>


                    <Routes>
                    

                    <Route exact path="/" element={<SecTabledata/>}/>
                    <Route path="/sign-in" element={<Login/>}/>
                    <Route path="/sign-up" element={<SignUp/>} />
                    <Route path="/viewtrades" element={<TradeTabledata/>} />


                    {/* <Route exact path="/" element={<Landing/>}/> */}
                    </Routes>
                </div>
            </Router>
        )
    
}

export default NavbarComp;

