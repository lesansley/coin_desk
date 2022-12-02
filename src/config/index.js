export const BASE_URL = "https://api.coingecko.com/api/v3";
export const REFRESH_INTERVAL = 60000;
export const RESULTS_PER_PAGE = 12;
export const BASE_URL_NEWS = "https://cryptopanic.com/api/v1/posts/";
export const DEFAULT_SORT_ORDER = "market_cap_desc";
export const DEFAULT_CURRENCY = "zar";
export const DEFAULT_CHART_DURATION = "365";
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
export const GRAPH_DURATION_ARRAY = [
  { 1: "1 day" },
  { 7: "1 week" },
  { 30: "1 momth" },
  { 180: "6 months" },
  { 365: "1 year" },
  { 1825: "5 years" },
  { 3650: "10 years" },
  { max: "max" },
];
