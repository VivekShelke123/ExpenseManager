import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Component/SideBar/SideBar";
import DashBoard from "./Component/DashBoard/DashBoard";
import Header from "./Component/Header/Header";
import Expense from "./Component/Expense/Expense";
import Income from "./Component/Income/Income";
import LoginForm from "./Component/LoginRegistration/LoginForm";
import RegistrationForm from "./Component/LoginRegistration/RegistrationForm";
import Setting from "./Component/Setting/Setting";
import Profile from "./Component/Profile/Profile";

function App() {
  const [logged, setLogged] = useState<Boolean>(false);

  return (
    <>
      <div>
        {logged === true ? (
          <div>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/Registration" element={<RegistrationForm />} />
            </Routes>
          </div>
        ) : (
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
                  <Route path="/DashBoard" element={<DashBoard />} />
                  <Route path="/Expense" element={<Expense />} />
                  <Route path="/Income" element={<Income />} />
                  <Route path="/Setting" element={<Setting />} />
                  <Route path="/Profile" element={<Profile />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
