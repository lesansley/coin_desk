import useSWR from "swr";

import { BASE_URL } from "../config";
import useStore from "./useStore";

export const useCoinMarketChartRequest = (coin, duration) => {
  const { currency } = useStore();
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

export default useCoinMarketChartRequest;
