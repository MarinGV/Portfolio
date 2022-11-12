import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import UIkit from "./components/UIkit/UIkit";
import ErrorTracking from "./components/ErrorTracking/ErrorTracking";
import WebAnalytics from "./components/WebAnalytics/WebAnalytics";

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
