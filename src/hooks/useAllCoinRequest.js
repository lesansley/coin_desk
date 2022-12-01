import useSWRInfinite from "swr/infinite";
import * as config from "../config";
import useStore from "./useStore";

const { BASE_URL, REFRESH_INTERVAL, RESULTS_PER_PAGE } = config;

const useAllCoinRequest = (order = "market_cap_desc") => {
  const { currency } = useStore();
  const queryObj = {
    vs_currency: currency,
    order,
    sparkline: true,
  };
  const queryStr = "?" + new URLSearchParams(queryObj).toString();
  const url = `${BASE_URL}/coins/markets${queryStr}`;
  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${url}&per_page=${RESULTS_PER_PAGE}&page=${index + 1}`,
    { refreshInterval: REFRESH_INTERVAL, revalidateAll: true }
  );
  return { data, error, size, setSize, isValidating };
};

export default useAllCoinRequest;
