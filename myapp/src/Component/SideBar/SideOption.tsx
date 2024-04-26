import React from "react";
import { Link } from "react-router-dom";

const SideOption: React.FC = () => {
  return (
    <div>
      <div className="option-container">
        <Link className="Link-class" to={'/'}><li>DashBoard</li></Link>
        <Link className="Link-class" to={'/'}><li>Expense</li></Link>
        <Link className="Link-class" to={'/'}><li>Income</li></Link>
        <Link className="Link-class" to={'/'}><li>Setting</li></Link>
        <Link className="Link-class" to={'/'}><li>Profile</li></Link>
      </div>
    </div>
  );
};

export default SideOption;
