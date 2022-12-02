import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Container } from "reactstrap";
import CoinCard from "./coin-card";
import PageLoading from "./page-loading";
import useAllCoinRequest from "../hooks/useAllCoinRequest";
import { RESULTS_PER_PAGE, DEFAULT_SORT_ORDER } from "../config";
import OrderBySelect from "./order-by-select";

function CoinDeck() {
  const [order, setOrder] = React.useState(DEFAULT_SORT_ORDER);
  const navigate = useNavigate();
  const result = useAllCoinRequest(order);
  const { data, error, size, setSize, isValidating } = result;
  if (error) return <h3>Oops. Something went wrong!</h3>;
  if (!data) return <PageLoading />;

  const coins = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < RESULTS_PER_PAGE);
  const isRefreshing = isValidating && data && data.length === size;

  const handleOrderSelect = (e) => {
    const value = e.target.value;
    setOrder(value);
  };

  const handleClick = (e) => {
    navigate(`/coin/${e.target.name}`);
  };

  return (
    <Container>
      <h1>Coin Deck</h1>
      <div style={{ fontSize: "10px" }}>
        Last updated: {Date(coins[0].update)}
      </div>
      <div>
        <OrderBySelect handleClick={handleOrderSelect} order={order} />
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
      <Row>
        <Col>
          <Button
            className="pt-10 mt-10 ml-10 mr-10"
            style={{ width: "100%" }}
            disabled={isLoadingMore || isReachingEnd || isRefreshing}
            onClick={() => setSize(size + 1)}
          >
            {isLoadingMore
              ? "loading..."
              : isReachingEnd
              ? "no more coins"
              : "load more"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CoinDeck;
