import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./Root";
import Cases from "./pages/Cases";
import CaseDetails from "./pages/CaseDetails";
import SolutionPage from "./pages/SolutionPage";
import BlogPage from "./pages/BlogPage";
const root = document.getElementById("root");

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/casedetails" element={<CaseDetails />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
