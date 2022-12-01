import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import CurrencySelect from "./currency-select";

function Navigation() {
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">Octoco</NavbarBrand>
        <Nav>
          <CurrencySelect />
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
