import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import CurrencySelect from "./currency-select";
import MetaMask from "./meta-mask";

function Navigation() {
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">Octoco</NavbarBrand>
        <MetaMask />
        <Nav>
          <CurrencySelect />
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
