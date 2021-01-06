import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormWrapper from "../styles/FormWrapper";
import ErrorAlert from "../components/ErrorAlert";

const Register = () => {
  const url = "https://jr-dev-sim-backend.herokuapp.com";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        const newUser = {
          name,
          email,
          password
        };

        await axios
          .post(`${url}/api/user/register`, newUser)
          .then(console.log(newUser));

        window.location = "/";
      } else {
        console.log(open);
        setError("Uh oh. Your passwords don't match.");
      }
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <FormWrapper>
      <h2>Register</h2>
      {error && (
        <ErrorAlert open={() => setOpen(true)} message={error} type="error" />
      )}
      <form>
        <label htmlFor="name">Display Name</label>
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="Display Name"
        />

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

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          onChange={e => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="Confirm Password"
        />

        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login!</Link>
      </p>
    </FormWrapper>
  );
};

export default Register;
