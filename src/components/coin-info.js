import React from "react";
import useCoinRequest from "../hooks/useCoinRequest";
import CoinSummary from "./coin-summary";

function CoinInfo({ coin }) {
  const result = useCoinRequest(coin);

  return (
    <>
      <div>Coin Info Component for {coin}</div>
      <CoinSummary />
    </>
  );
}

export default CoinInfo;
