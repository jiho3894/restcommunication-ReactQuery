import React from "react";
import Layout from "./components/Layout";
import Router from "./router/router";

import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Router />
    </Layout>
  );
}

export default App;
