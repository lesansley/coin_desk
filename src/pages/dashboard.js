import React from "react";
import { useState } from "react";

import CoinDeck from "../components/coin-deck";

const orderBy = [
  {
    id: "market_cap_desc",
    description: "Descending market cap",
  },
  { id: "market_cap_asc", description: "Ascending market cap" },
  { id: "volume_asc", description: "Ascending volume" },
  { id: "volume_desc", description: "Descending volume" },
  { id: "id_asc", description: "Ascending ID" },
  { id: "id_desc", description: "Descending ID" },
];

function Dashboard() {
  const [order, setOrder] = useState("market_cap_desc");
  const [currency, setCurrency] = useState("zar");

  return (
    <>
      <h2>Dashboard Page</h2>

      {/* Currency db */}
      {/* OrderBy */}
      <CoinDeck order={order} currency={currency} />
    </>
  );
}

export default Dashboard;
