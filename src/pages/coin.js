import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import CoinInfo from "../components/coin-info";
import CoinChart from "../components/coin-chart";

function Coin() {
  const coin = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h2>{coin.id.toUpperCase()} Coin Page</h2>
      <div>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back to dashboard
        </Button>
      </div>
      <CoinInfo coin={coin.id} />
      <div>
        <CoinChart />
      </div>
    </>
  );
}

export default Coin;
