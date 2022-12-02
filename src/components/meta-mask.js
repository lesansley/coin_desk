import React from "react";
import { ethers } from "ethers";

function MetaMask() {
  const [state, setState] = React.useState({
    address: "",
    balance: null,
  });

  const getWallet = React.useCallback(async () => {
    const add = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(add);
    const bal = await window.ethereum.request({
      method: "eth_getBalance",
      params: [add[0], "latest"],
    });
    return { address: add[0], balance: bal };
  }, []);

  React.useEffect(() => {
    if (window.ethereum) {
      console.log("Metamask extension installed");
      getWallet().then(setState);
    } else {
      alert("Install metamask extension!!");
    }
  }, [getWallet]);

  return (
    <>
      <div>{state.address}</div>
      <div>{state.balance}</div>
    </>
  );
}

export default MetaMask;
