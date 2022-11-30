import React from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/coin-info";

function Coin() {
  const coin = useParams();
  return (
    <>
      <h2>{coin.id.toUpperCase()} Coin Page</h2>
      <CoinInfo coin={coin.id} />
    </>
  );
}

export default Coin;
