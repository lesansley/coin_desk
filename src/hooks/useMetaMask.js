import React from "react";
import { MetaMaskContext } from "../context";

function useMetaMask() {
  const context = React.useContext(MetaMaskContext);
  if (!context) {
    throw new Error("useToggle must be utilized with Toggle");
  }
  return context;
}

export default useMetaMask;
