import useSWR from "swr";

import { BASE_URL } from "../config";
import useStore from "./useStore";

export const useCoinMarketRequest = (coin) => {
  const { currency } = useStore();
  if (!coin) {
    throw new Error("Path is required");
  }
  const queryObj = {
    vs_currency: currency,
    ids: coin,
    order: "market_cap_desc",
    per_page: 100,
    page: 1,
    sparkline: false,
    price_change_percentage:
      "1h % 2C24h % 2C7d % 2C14d % 2C30d % 2C200d % 2C1y",
  };
  const queryStr = "?" + new URLSearchParams(queryObj).toString();
  const url = `${BASE_URL}/coins/markets/${queryStr}`;
  const { data, error, isValidating } = useSWR(() => url);
  return { data, error, isValidating };
};

export default useCoinMarketRequest;
