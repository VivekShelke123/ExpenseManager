import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDetails } from "../../Store/UserContext";

const SideOption: React.FC = () => {

  const userDetails = useContext(UserDetails);
  const Navigate = useNavigate();

  function handleLogOut():void{
    localStorage.clear();
    userDetails?.setLogged(false);

    Navigate('/');

  }

  return (
    <div>
      <div className="option-container">
        <Link className="Link-class" to={'/'}><li>DashBoard</li></Link>
        <Link className="Link-class" to={'/Expense'}><li>Expense</li></Link>
        <Link className="Link-class" to={'/Income'}><li>Income</li></Link>
        <Link className="Link-class" to={'/Setting'}><li>Setting</li></Link>
        <Link className="Link-class" to={'/Profile'}><li>Profile</li></Link>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    </div>
  );
};

export default SideOption;
