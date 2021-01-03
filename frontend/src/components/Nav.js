import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/UserContext";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem 0 8rem;
  background: transparent;
  margin-bottom: 1rem;

  .logo-link {
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div p {
    padding-bottom: 0.5rem;
  }

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
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;
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

  return (
    <HeaderWrap>
      <Link className="logo-link" to="/">
        <h2>Site Name</h2>
      </Link>
      {userData.user ? (
        <div>
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
        </div>
      ) : (
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
      )}
    </HeaderWrap>
  );
}
