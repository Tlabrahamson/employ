import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext";
import FormWrapper from "../styles/FormWrapper";
import ErrorAlert from "../components/ErrorAlert";

const Login = () => {
  const url = "https://employ-backend.onrender.com";
  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const loginUser = {
        email,
        password
      };
      const loginResponse = await axios.post(
        `${url}/api/user/login`,
        loginUser
      );
      console.log(open);

      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      window.location = "/";
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      console.log(error);
    }
  };

  return (
    <FormWrapper>
      <h2>Login</h2>
      {error && (
        <ErrorAlert open={() => setOpen(true)} message={error} type="error" />
      )}
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <p>
        Don't have an account yet? <Link to="/register">Register!</Link>
      </p>
    </FormWrapper>
  );
};

export default Login;
