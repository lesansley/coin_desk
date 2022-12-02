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
  { id: "market_cap_desc", value: "descending market cap" },
  { id: "market_cap_asc", value: "ascending market cap" },
  { id: "volume_desc", value: "descending volume" },
  { id: "volume_asc", value: "ascending volume" },
  { id: "id_desc", value: "descending ID" },
  { id: "id_asc", value: "ascending ID" },
];
export const CHART_DURATION_ARRAY = [
  { id: "1", value: "1 day" },
  { id: "7", value: "1 week" },
  { id: "30", value: "1 month" },
  { id: "180", value: "6 months" },
  { id: "365", value: "1 year" },
  { id: "1825", value: "5 years" },
  { id: "3650", value: "10 years" },
  { id: "max", value: "max" },
];
