import useSWR from "swr";

import { BASE_URL } from "../config";

//TODO: Place in useContext
const CURRENCY = "zar";

export const useCoinMarketRequest = (coin, duration) => {
  if (!coin) {
    throw new Error("Path is required");
  }
  console.log("coin", coin);
  const CURRENCY = "zar";
  const queryObj = {
    vs_currency: CURRENCY,
    days: duration,
  };
  const queryStr = "?" + new URLSearchParams(queryObj).toString();
  const url = `${BASE_URL}/coins/${coin}/market_chart${queryStr}`;
  const { data, error, isValidating } = useSWR(() => url);
  return { data, error, isValidating };
};

export default useCoinMarketRequest;
