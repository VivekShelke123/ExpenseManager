import React, { useState } from 'react';
import './FormStyles.css'; // Import CSS file for styling

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input type="text" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
