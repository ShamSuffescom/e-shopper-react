// // src/components/Navbar.js
// import React from 'react';
// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// const MyNavbar = () => {
//   return (
//     <Navbar color="light" light expand="md">
//       <NavbarBrand href="/">MyApp</NavbarBrand>
//       <Nav className="mr-auto" navbar>
//         <NavItem>
//           <NavLink href="/login">Login</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/register">Register</NavLink>
//         </NavItem>
//       </Nav>
//     </Navbar>
//   );
// };

// export default MyNavbar;


// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
    return (
      <Navbar expand="lg" className="bg-light navbar-light py-3 py-lg-0 px-0">
        <Link to="/" className="text-decoration-none d-block d-lg-none">
          <h1 className="m-0 display-5 font-weight-semi-bold">
            <span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper
          </h1>
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto py-0" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/shop" activeClassName="active">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/detail" activeClassName="active">
                Shop Detail
              </NavLink>
            </NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
              <DropdownToggle nav caret>
                Pages
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/cart">
                  Shopping Cart
                </DropdownItem>
                <DropdownItem tag={Link} to="/checkout">
                  Checkout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink tag={Link} to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto py-0" navbar>
            <NavItem>
              <NavLink tag={Link} to="/login" activeClassName="active">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register" activeClassName="active">
                Register
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;




