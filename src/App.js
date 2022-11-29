import React from "react";
import Layout from "./components/layout";
import Main from "./pages/main";
import Details from "./pages/details";

function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
        <Details />
      </Layout>
    </div>
  );
}

export default App;
