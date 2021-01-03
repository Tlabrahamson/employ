import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero.png";

const HeroWrapper = styled.div`
  height: 290px;
  margin-bottom: 2rem;
  margin-top: -1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: -1;
  }

  h1 {
    padding-bottom: 2rem;
  }

  p {
    max-width: 442px;
    margin: 0 auto;
    text-align: center;
  }

  span {
    font-weight: 700;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <img src={heroImage} alt="A meeting at a workspace" />
      <h1>Find your dream job!</h1>
      <p>
        <span>Site Name</span> is a bountiful source for discovering your next
        career. We specialize in helping new job seekers land their first
        opportunity.
      </p>
    </HeroWrapper>
  );
};

export default Hero;
