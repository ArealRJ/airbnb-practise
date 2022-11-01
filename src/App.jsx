import React, { memo } from "react";
import routes from "./router";
import { useRoutes } from "react-router-dom";

// import AppHeader from './components/app-header'
import AppFooter from "./components/app-footer";
import useScrollTop from "@/hooks/useScrollTop";

const App = memo(() => {
  useScrollTop();

  return (
    <div className="app">
      {/* <AppHeader/> */}
      <div>{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
