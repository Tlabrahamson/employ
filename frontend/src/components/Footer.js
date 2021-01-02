import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  padding: 1rem 8rem;
  color: #2d2d2d;
  background: #fefefe;
  width: 100%;
  margin-top: 4rem;

  @media screen and (max-width: 800px) {
    padding: 1rem;
    text-align: center;

    h3 {
      font-size: 16px;
    }
  }
`;

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FooterWrap>
      <p>&copy; {year} Tim Abrahamson</p>
    </FooterWrap>
  );
}
