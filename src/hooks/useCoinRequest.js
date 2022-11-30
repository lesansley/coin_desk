import useSWR from "swr";

import { BASE_URL, REFRESH_INTERVAL } from "../config";

export const useCoinRequest = (coin) => {
  if (!coin) {
    throw new Error("Path is required");
  }
  const queryObj = {
    localization: false,
    tickers: true,
    market_data: true,
    community_data: false,
    developer_data: false,
    sparkline: true,
  };
  const queryStr = "?" + new URLSearchParams(queryObj).toString();
  const url = `${BASE_URL}/coins/${coin}${queryStr}`;
  const { data, error, mutate, size, setSize, isValidating } = useSWR(
    () => url,
    { refreshInterval: REFRESH_INTERVAL }
  );
  return { data, error, mutate, size, setSize, isValidating };
};

export default useCoinRequest;
