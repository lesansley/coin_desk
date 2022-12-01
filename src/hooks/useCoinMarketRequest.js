import useSWR from "swr";

import { BASE_URL } from "../config";
import useCurrencyStore from "./useCurrencyStore";

export const useCoinMarketRequest = (coin, duration) => {
  const currency = useCurrencyStore((state) => state.currency);
  if (!coin) {
    throw new Error("Path is required");
  }
  const queryObj = {
    vs_currency: currency,
    days: duration,
  };
  const queryStr = "?" + new URLSearchParams(queryObj).toString();
  const url = `${BASE_URL}/coins/${coin}/market_chart${queryStr}`;
  const { data, error, isValidating } = useSWR(() => url);
  return { data, error, isValidating };
};

export default useCoinMarketRequest;
