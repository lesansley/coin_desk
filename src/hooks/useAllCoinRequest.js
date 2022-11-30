import useSWRInfinite from "swr/infinite";
import * as config from "../config";

const { BASE_URL, REFRESH_INTERVAL, RESULTS_PER_PAGE } = config;
//TODO: Place in useContext
const CURRENCY = "zar";
export const useAllCoinRequest = (order = "market_cap_desc") => {
  const queryObj = {
    vs_currency: CURRENCY,
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
