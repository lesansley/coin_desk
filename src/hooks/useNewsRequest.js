import useSWRInfinite from "swr/infinite";
import { BASE_URL_NEWS, RESULTS_PER_PAGE } from "../config";

export const useNewsRequest = (coin) => {
  const queryObj = {
    auth_token: process.env.REACT_APP_NEWS_API_KEY,
    currencies: coin,
    kind: "news",
    public: true,
    regions: "en",
  };
  const queryStr = "?" + new URLSearchParams(queryObj).toString();
  const url = `${BASE_URL_NEWS}${queryStr}`;
  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${url}&per_page=${RESULTS_PER_PAGE}&page=${index + 1}`
  );
  return { data, error, size, setSize, isValidating };
};

export default useNewsRequest;
