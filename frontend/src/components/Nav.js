import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/UserContext";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  background: #232023;
  color: #fff;
  margin-bottom: 4rem;

  nav {
    display: flex;
    flex-direction: column;
  }

  nav ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  nav a {
    width: 100%;
    font-size: 18px;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    padding: 2rem;

    h1 {
      font-size: 1.5rem;
    }

    nav a {
      font-size: 16px;
    }
  }
`;

export default function Nav() {
  const { userData } = useContext(UserContext);

  const handleLogout = e => {
    e.preventDefault();
    let token = localStorage.getItem("auth-token");
    localStorage.setItem("auth-token", "");
    console.log(token);
    window.location = "/";
  };

  if (userData.user) {
    return (
      <HeaderWrap>
        <Link to="/">
          <h1>Jr Dev Sim</h1>
        </Link>
        <p>Hello, {userData.user.name}</p>
        <nav>
          <ul>
            <Link to="/create">
              <li>List a Job</li>
            </Link>
            <Link onClick={handleLogout}>
              <li>Log Out</li>
            </Link>
          </ul>
        </nav>
      </HeaderWrap>
    );
  }
  return (
    <HeaderWrap>
      <Link to="/">
        <h1>Jr Dev Sim</h1>
      </Link>
      <nav>
        <ul>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
    </HeaderWrap>
  );
}
