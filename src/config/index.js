export const BASE_URL = "https://api.coingecko.com/api/v3";
export const REFRESH_INTERVAL = 60000;
export const RESULTS_PER_PAGE = 12;
export const BASE_URL_NEWS = "https://cryptopanic.com/api/v1/posts/";
export const DEFAULT_SORT_ORDER = "market_cap_desc";
export const DEFAULT_CURRENCY = "zar";
export const PRIORITY_CURRENCIES_ARRAY = [
  "zar",
  "usd",
  "gbp",
  "eur",
  "btc",
  "eth",
  "divider",
];
export const ORDER_OPTION_ARRAY = [
  { market_cap_desc: "descending market cap" },
  { market_cap_asc: "ascending market cap" },
  { volume_desc: "descending volume" },
  { volume_asc: "ascending volume" },
  { id_desc: "descending ID" },
  { id_asc: "ascending ID" },
];
