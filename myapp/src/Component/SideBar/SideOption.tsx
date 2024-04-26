import React from "react";
import { Link } from "react-router-dom";

const SideOption: React.FC = () => {
  return (
    <div>
      <div className="option-container">
        <li>DashBoard</li>
        <li>Expense</li>
        <li>Income</li>
        <li>Setting</li>
        <li>Profile</li>
      </div>
    </div>
  );
};

export default SideOption;
