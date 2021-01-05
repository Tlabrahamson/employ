import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero.jpg";

const HeroWrapper = styled.div`
  height: 290px;
  margin-bottom: 2rem;
  margin-top: -1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: -1;
    opacity: 0.2;
  }

  h1 {
    padding-bottom: 2rem;
    position: relative;
    white-space: nowrap;
  }

  h1 span {
    color: #5aa8e0;
  }

  p {
    max-width: 442px;
    margin: 0 auto;
  }

  p span {
    font-weight: 700;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <img src={heroImage} alt="A meeting at a workspace" />
      <h1>
        Find your <span>dream</span> job!
      </h1>
      <p>
        <span>EMPLOY.</span> is a bountiful source for discovering your next
        occupation. We specialize in helping new job seekers land their first
        opportunity.
      </p>
    </HeroWrapper>
  );
};

export default Hero;
