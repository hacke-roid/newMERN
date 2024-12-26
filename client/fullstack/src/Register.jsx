import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigation = useNavigate();

  const [userDetail, setUserDetail] = useState({
    usernames: "",
    passwords: "",
    confirmPassword: "",
  });

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Hii");
    console.log(userDetail);
    axios.post(`http://localhost:5500/register`, {
      usernames,
      passwords,
      confirmPassword,
    });
    navigation('/login')
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const { usernames, passwords, confirmPassword } = userDetail;

  return (
    <div className="container">
      <h1>SignUp</h1>
      <div className="login-details">
        <form onSubmit={handleSignupSubmit}>
          <div>
            <label>Username:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Username..."
              name="usernames"
              value={usernames}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div>
            <label>Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password..."
              name="passwords"
              value={passwords}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div>
            <label>Confirm Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter Confirm Password..."
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">SignUp</button>
        </form>
      </div>
      <div>
        <button onClick={() => navigation("/login")}>Login</button>
      </div>
    </div>
  );
};

export default Register;
