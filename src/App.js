import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/error-page";

const Coin = React.lazy(() => import("./pages/coin"));

function App() {
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
