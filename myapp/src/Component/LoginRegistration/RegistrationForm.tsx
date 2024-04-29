import React, { useState } from 'react';
import './FormStyles.css'; // Import CSS file for styling

const RegistrationForm: React.FC = () => {
  const [registrationData, setRegistrationData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration Data:', registrationData);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>Registration</h2>
        <form onSubmit={handleRegistrationSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={registrationData.email}
            onChange={handleRegistrationChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registrationData.password}
            onChange={handleRegistrationChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={registrationData.confirmPassword}
            onChange={handleRegistrationChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
