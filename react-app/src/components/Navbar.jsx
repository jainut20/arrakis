import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
//import { BrowserRouter as Link } from "react-router-dom";
import UserAuthService from "../services/UserAuthService";
class NavbarComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false,
      currUser: undefined,
    };
  }
  componentDidMount() {
    const user = UserAuthService.getUser();
    if (user) {
      console.log(user);
      this.setState({
        currUser: user,
        showNav: true,
      });
    }
  }
  handleLogout() {
    UserAuthService.logOut();
    console.log("logout");
  }
  render() {
    const currUser = JSON.parse(localStorage.getItem("user") || "");
    console.log(currUser);
    return (
      <div>
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand href="#home">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqoXvD_MV9TozNgVaOen1vOreoMRvBSoeP1qtdDdZ1RF_ZUvI3TdY_az-omHcU524g84&usqp=CAU"
                height="70"
                className="d-inline-block align-top mx-3"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="/" onClick={this.handleLogout}>
              <h1>BONDS</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            {currUser ? (
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown title="View" id="basic-nav-dropdown">
                    <NavDropdown.Item 
                    //as={Link} 
                    to="/viewsecurity">
                      Securities
                    </NavDropdown.Item>
                    <NavDropdown.Item 
                    //as={Link} 
                    to="/viewtrades">
                      Trades{" "}
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link 
                  //as={Link} 
                  to="/watchlist">
                    Watchlist
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Button
                    style={{ backgroundColor: "darkblue" }}
                    className="me-2"
                    //as={Link}
                    to={"/sign-in"}
                    onClick={this.handleLogout}
                  >
                    Log Out
                  </Button>

                </Nav>
              </Navbar.Collapse>
            ) : (
              <Button>Hi</Button>
            )}
          </Navbar>
        </div>
        
      </div>
    );
  }                 
}

export default NavbarComp;
