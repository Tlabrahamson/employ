import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  padding: 1rem 8rem;
  color: #fff;
  position: absolute;
  bottom: 0;
  background: #3f3c3f;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 2rem;
  }
`;

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FooterWrap>
      <h3>&copy; {year} Tim Abrahamson</h3>
    </FooterWrap>
  );
}
