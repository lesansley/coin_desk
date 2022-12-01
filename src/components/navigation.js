import React from "react";
import { useNavigate } from "react-router-dom";
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
  DropdownItem,
  NavbarText,
} from "reactstrap";
import useCurrencyStore from "../hooks/useCurrencyStore";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const currency = useCurrencyStore((state) => state.currency);
  return (
    <div>
      <Navbar>
        <NavbarBrand href="https://octoco.ltd/">Octoco</NavbarBrand>
        <Nav>
          <UncontrolledDropdown nav inNavbar end>
            <DropdownToggle nav caret>
              Currency - {currency.toUpperCase()}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="zar" active>
                ZAR
              </DropdownItem>
              <DropdownItem value="usd">USD</DropdownItem>
              <DropdownItem value="gbp">GBP</DropdownItem>
              <DropdownItem value="eur">EUR</DropdownItem>
              <DropdownItem divider />
              <DropdownItem value="zar">Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink href="/">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/lesansley/octoco">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
