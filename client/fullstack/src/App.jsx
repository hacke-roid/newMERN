import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const App = ({userData, onChange}) => {
    // console.log(userData, onChange);
  // const navigation = useNavigate();
  const [userDetail, setUserDetail] = useState({
    usernames: "",
    passwords: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetail.usernames);
    axios
      .post(`http://localhost:5500/login`, {
        usernames,
        passwords,
      })
      .then((resposne) => {
        alert("Login Succes");
        console.log(resposne.data);
        if (resposne.data === "Success") {
          navigation("/dashboard");
          onChange(userDetail.usernames)
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSignUpClick = () => {
    // navigation("/register");
  };

  const { usernames, passwords } = userDetail;

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="login-details">
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>Username:</label>
            <br />
            <input
              type="text"
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
              name="passwords"
              value={passwords}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <button type="submit">Login</button>
        </form>
        <div>
          <button onClick={handleSignUpClick}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default App;
