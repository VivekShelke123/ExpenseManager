import React from "react";
import { Link } from "react-router-dom";

const SideOption: React.FC = () => {
  return (
    <div>
      <div className="option-container">
        <Link className="Link-class" to={'/DashBoard'}><li>DashBoard</li></Link>
        <Link className="Link-class" to={'/Expense'}><li>Expense</li></Link>
        <Link className="Link-class" to={'/Income'}><li>Income</li></Link>
        <Link className="Link-class" to={'/Setting'}><li>Setting</li></Link>
        <Link className="Link-class" to={'/Profile'}><li>Profile</li></Link>
      </div>
    </div>
  );
};

export default SideOption;
