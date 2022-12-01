import useSWR from "swr";
import { BASE_URL } from "../config";

export const useAllCurrencyRequest = () => {
  const url = `${BASE_URL}/simple/supported_vs_currencies`;
  const { data, error, isValidating } = useSWR(() => url);
  return { data, error, isValidating };
};

export default useAllCurrencyRequest;
