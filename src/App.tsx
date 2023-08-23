import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PageContact from "./pages/PageContact/PageContact";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageContact />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
