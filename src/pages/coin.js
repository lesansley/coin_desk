import React from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/coin-info";
import CoinChart from "../components/coin-chart";

function Coin() {
  const coin = useParams();
  return (
    <>
      <h2>{coin.id.toUpperCase()} Coin Page</h2>
      <CoinInfo coin={coin.id} />
      <div>
        <CoinChart />
      </div>
    </>
  );
}

export default Coin;
