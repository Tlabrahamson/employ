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
  z-index: 1;

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

    span {
      font-size: 14px;
      font-weight: 500;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  nav ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  nav a {
    width: 100%;
    display: flex;
    justify-content: start;

    &:last-child {
      background: #ee4853;
      border-radius: 10px;
      color: #fff;
      padding: 10px;
    }
  }

  @media screen and (max-width: 1200px) {
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
        <h2>EMPLOY.</h2>
      </Link>
      {userData.user ? (
        <div>
          <p>
            <span>Hello, {userData.user.name}</span>
          </p>
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
