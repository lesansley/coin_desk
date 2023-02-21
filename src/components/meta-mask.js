import React from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import { useWeb3React } from "@web3-react/core";
import { Button, Table } from "reactstrap";
import { injected } from "./wallet/connectors";
// import { MetaMaskContext } from "../context";
// import { useMetaMask } from "../hooks";

const MetaMaskContext = React.createContext(null);
MetaMaskContext.displayName = "MetaMaskContext";

function useMetaMask() {
  const context = React.useContext(MetaMaskContext);
  if (!context) {
    throw new Error("useMetaMask must be utilized with MetaMaskProvider");
  }
  return context;
}

function MetaMaskProvider({ children }) {
  const [connected, setConnected] = React.useState(false);
  const { activate, account, library, connector, active, deactivate } =
    useWeb3React();
  const [isActive, setIsActive] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const allowedTypes = ["MetaMaskAccounts", "MetaMaskButton"];

  // Connect to MetaMask wallet
  const connect = React.useCallback(async () => {
    console.log("Connecting to MetaMask Wallet");
    try {
      await activate(injected);
    } catch (error) {
      console.log("Error on connecting: ", error);
    }
  });

  // Disconnect from Metamask wallet
  const disconnect = async () => {
    console.log("Deactivating...");
    try {
      await deactivate();
    } catch (error) {
      console.log("Error on disconnecting: ", error);
    }
  };

  React.useEffect(() => {
    if (connected) {
      connect().then(() => {
        setIsLoading(false);
      });
    }
    return console.log("Not connected");
  }, [connect, connected]);

  return (
    <MetaMaskContext.Provider value={values}>
      {React.Children.map((children, child) => {
        if (allowedTypes.includes(child.type.name))
          return React.cloneElement(child, { connected });
        return child;
      })}
      {children}
    </MetaMaskContext.Provider>
  );
}

function MetaMaskButton() {
  const { connected, setConnected } = useMetaMask();

  const handleClick = (e) => {
    setConnected(!connected);
  };

  return (
    <Button
      color={connected ? "danger" : "primary"}
      disabled={false}
      onClick={handleClick}
    >
      <img src="metamask.png" alt="MetaMask" width="30" heigh="30" />
      <span>&nbsp;</span>
      {connected ? "Disconnect from MetaMask" : "Connect to MetaMask"}
    </Button>
  );
}

function MetaMaskAccounts({ children }) {
  const connected = useMetaMask();
  return connected ? children : null;
}

export { MetaMaskProvider, MetaMaskButton, MetaMaskAccounts };
