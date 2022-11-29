import useSWRInfinite from "swr/infinite";

//TODO: Put into a config file
const baseUrl = "https://api.coingecko.com/api/v3";
const refreshInterval = 15000;
const perPage = 12;

export const useCoinRequest = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }
  const url = baseUrl + path;
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${url}&per_page=${perPage}&page=${index + 1}`,
    { refreshInterval: refreshInterval }
  );
  console.log(data);
  return { data, error, mutate, size, setSize, isValidating };
};

export default useCoinRequest;
