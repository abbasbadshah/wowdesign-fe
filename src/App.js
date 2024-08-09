import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/common/Scroll To Top/scrolltotop";

function App() {
  const getComponent = (component) => {
    return React.createElement(component, {});
  };
  return (
    <div className="App">
      <Helmet>
        <title>Wow Designs and Products</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={getComponent(route.component)}
            />
          ))}
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;