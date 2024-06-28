// src/components/Categories.js
import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
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
      <div className="col-lg-3 d-none d-lg-block">
        <a
          className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
          onClick={this.toggle}
          style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}
        >
          <h6 className="m-0">Categories</h6>
          <FontAwesomeIcon icon={faAngleDown} className="text-dark" />
        </a>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Navbar className="navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0">
            <Nav navbar className="w-100 overflow-hidden" style={{ height: '410px' }}>
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle nav caret className="nav-link">
                  Dresses
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">Men's Dresses</DropdownItem>
                  <DropdownItem href="#">Women's Dresses</DropdownItem>
                  <DropdownItem href="#">Baby's Dresses</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink href="#">Shirts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Jeans</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Swimwear</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sleepwear</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sportswear</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Jumpsuits</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Blazers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Jackets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Shoes</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Collapse>
      </div>
    );
  }
}

export default Categories;
