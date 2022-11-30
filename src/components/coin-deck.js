import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Spinner, Row, Col } from "reactstrap";
import CoinCard from "./coin-card";
import useAllCoinRequest from "../hooks/useAllCoinRequest";
import { RESULTS_PER_PAGE } from "../config";

function CoinDeck({ order }) {
  const navigate = useNavigate();
  const result = useAllCoinRequest(order);
  const { data, error, size, setSize, isValidating } = result;
  if (error) return <h3>Oops. Something went wrong!</h3>;
  if (!data) return <Spinner>Loading...</Spinner>;

  const coins = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < RESULTS_PER_PAGE);
  const isRefreshing = isValidating && data && data.length === size;

  const handleClick = (e) => {
    navigate(`/coin/${e.target.name}`);
  };

  return (
    <>
      <h3>Coin Deck</h3>
      <div style={{ fontSize: "10px" }}>
        Last updated: {Date(coins[0].update)}
      </div>
      <Row lg="4" md="3" sm="2" xs="1">
        {coins.map((coin) => {
          return (
            <Col key={coin.id} className="pl-10 pr-10">
              <CoinCard
                id={coin.id}
                image={coin.image}
                name={coin.name}
                marketCap={coin.market_cap}
                volume={coin.total_volume}
                price={coin.current_price}
                symbol={coin.symbol}
                high={coin.high_24h}
                low={coin.low_24h}
                change={coin.price_change_percentage_24h}
                updated={coin.last_updated}
                sparkline={coin.sparkline_in_7d.price}
                onClick={handleClick}
              />
            </Col>
          );
        })}
      </Row>

      <Button
        disabled={isLoadingMore || isReachingEnd || isRefreshing}
        onClick={() => setSize(size + 1)}
      >
        {isLoadingMore
          ? "loading..."
          : isReachingEnd
          ? "no more coins"
          : "load more"}
      </Button>
    </>
  );
}

export default CoinDeck;
