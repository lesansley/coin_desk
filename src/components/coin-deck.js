import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Spinner, Row, Col } from "reactstrap";
import CoinCard from "./coin-card";
import useCoinRequest from "../hooks/useCoinRequest";

//TODO: Pull from context
const PAGE_SIZE = 12;

function CoinDeck({ ...props }) {
  const navigate = useNavigate();
  const result = useCoinRequest(
    "/coins/markets?vs_currency=zar&order=market_cap_desc&sparkline=true" //TODO: Put into a config file
  );
  // eslint-disable-next-line no-unused-vars
  const { data, error, mutate, size, setSize, isValidating } = result;
  if (error) return <h3>Oops. Something went wrong!</h3>;
  if (!data) return <Spinner>Loading...</Spinner>;

  const coins = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  // const isRefreshing = isValidating && data && data.length === size;

  const handleClick = (e) => {
    console.log(e);
    navigate(`/coin/${e.target.name}`);
  };

  return (
    <>
      <h3>Coin Deck</h3>

      <Row lg="4" md="3" sm="2" xs="1">
        {coins.map((coin) => {
          return (
            <Col key={coin.id} className="pl-10 pr-10">
              <CoinCard
                image={coin.image}
                name={coin.name}
                marketCap={coin.market_cap}
                volume={coin.total_volume}
                price={coin.current_price}
                symbol={coin.symbol}
                high={coin.high_24h}
                low={coin.low_24h}
                change={coin.price_change_percentage_24h}
                onClick={handleClick}
              />
            </Col>
          );
        })}
      </Row>

      <Button
        disabled={isLoadingMore || isReachingEnd}
        onClick={() => setSize(size + 1)}
      >
        {isLoadingMore
          ? "loading..."
          : isReachingEnd
          ? "no more issues"
          : "load more"}
      </Button>
    </>
  );
}

export default CoinDeck;
