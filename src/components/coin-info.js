import React from "react";
import useCoinRequest from "../hooks/useCoinRequest";

function CoinInfo({ coin }) {
  const result = useCoinRequest(coin);

  return <>Coin Info Component for {coin}</>;
}

export default CoinInfo;
