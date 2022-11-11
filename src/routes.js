import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import UIkit from "./components/UIkit";
import ErrorTracking from "./components/ErrorTracking";
import WebAnalytics from "./components/WebAnalytics";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/UIkit" element={<UIkit />} />
        <Route path="/ErrorTracking" element={<ErrorTracking />} />
        <Route path="/WebAnalytics" element={<WebAnalytics />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
