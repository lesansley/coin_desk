import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import ErrorPage from "./pages/error-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
