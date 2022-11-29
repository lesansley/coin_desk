import React from "react";
import { Button, Spinner } from "reactstrap";
import CoinCard from "./coin-card";
import useCoinRequest from "../hooks/useCoinRequest";

//TODO: Pull from context
const PAGE_SIZE = 10;

function CoinDeck({ ...props }) {
  const result = useCoinRequest(
    "/coins/markets?vs_currency=zar&order=market_cap_desc&sparkline=true" //TODO: Put into a config file
  );
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
  const isRefreshing = isValidating && data && data.length === size;

  console.log("coins", coins);
  return (
    <>
      <h3>Coin Deck</h3>

      {coins.map((coin) => {
        return (
          <CoinCard
            key={coin.id}
            image={coin.image}
            name={coin.name}
            marketCap={coin.market_cap}
            volume={coin.total_volume}
            price={coin.current_price}
            symbol={coin.symbol}
            high={coin.high_24h}
            low={coin.low_24h}
          />
        );
      })}
      <CoinCard />
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
