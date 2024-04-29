import React, { useContext, useState } from "react";
import "./FormStyles.css"; // Import CSS file for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDetails } from "../../Store/UserContext";

const LoginForm: React.FC = () => {
  const userDetails = useContext(UserDetails);

  const Navigate = useNavigate();

  const [uName, setUName] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit() {
    const data = {
      userName: uName,
      password: pass,
    };

    axios
      .post("http://localhost:5000/Login", data)
      .then((res) => { 
        if (res.data === "NotFound") {
          alert("UserNotFound");
        } else if (res.data === "Found") {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem('userName',uName);
         
          Navigate("/Dashboard");
          alert("Login Successful");
        } else if (res.data === "Incorrect") {
          alert("Incorrect Password");
          setPass("");
        }
      })
      .catch((err) => {
        console.error(err);
        setUName("");
        setPass("");
      });
  }

  return (
    <div className="form-container">
      <div className="form">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={uName}
            onChange={(e) => setUName(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
