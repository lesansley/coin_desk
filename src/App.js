import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/error-page";
import { useStore } from "./hooks";

const Coin = React.lazy(() => import("./pages/coin"));

function App() {
  const { setCoinList } = useStore();

  React.useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/list?include_platform=false",
      { method: "get" }
    )
      .then((response) => response.json())
      .then((data) => setCoinList(data));
  }, [setCoinList]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="coin/:id"
            element={
              <React.Suspense fallback={<>...</>}>
                <Coin />
              </React.Suspense>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
