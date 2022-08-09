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
    UserAuthService.logout();
    window.location.href = "/sign-in";
    console.log("logout");
  }
  render() {
    const currUser = JSON.parse(localStorage.getItem("user") || "{}");
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
              <h2>Easy Bonds</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            {currUser.email ? (
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown title="View" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      onClick={() => {
                        window.location.href = "/viewsecurity";
                      }}
                      // to="/"
                    >
                      Securities
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      //as={Link}
                      onClick={() => {
                        window.location.href = "/viewtrades";
                      }}
                      // to="/viewtrades"
                    >
                      Trades{" "}
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link
                    //as={Link}
                    onClick={() => {
                      window.location.href = "/watchlist";
                    }}
                    // to="/watchlist"
                  >
                    Watchlist
                  </Nav.Link>

                  <Nav.Link
                    //as={Link}
                    onClick={() => {
                      window.location.href = "/criticalbonds";
                    }}
                    // to="/watchlist"
                  >
                    Critical Bonds
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Button
                    style={{ backgroundColor: "darkblue" }}
                    className="me-2"
                    //as={Link}
                    onClick={this.handleLogout}
                  >
                    Log Out
                  </Button>
                </Nav>
              </Navbar.Collapse>
            ) : (
              <></>
            )}
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavbarComp;
