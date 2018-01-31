import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'


const NavbarContainer = props => (
  <div>
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">UI</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin">Admin</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
)

export default NavbarContainer;










