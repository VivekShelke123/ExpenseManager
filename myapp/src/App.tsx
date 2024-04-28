import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Component/SideBar/SideBar";
import DashBoard from "./Component/DashBoard/DashBoard";
import Header from "./Component/Header/Header";
import Expense from "./Component/Expense/Expense";

function App() {
  return (
    <>
      <div className="home-container">
        <div className="grid-col-1">
          <SideBar />
        </div>
        <div className="grid-col-2">
          <div className="header-class">
            <Header />
          </div>
          <div className="route-class">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/Expense" element={<Expense />} />
              <Route path="/" element={<SideBar />} />
              <Route path="/" element={<SideBar />} />
              <Route path="/" element={<SideBar />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
