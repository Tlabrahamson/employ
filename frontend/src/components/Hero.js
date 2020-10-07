import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  text-align: center;
  color: #fff;

  h2 {
    font-size: 2.5rem;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;
  }

  hr {
    margin: 4rem 0;
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <h2>Find your dream job!</h2>
      <p>Tech jobs for every skill level.</p>
      <hr />
    </HeroWrapper>
  );
};

export default Hero;
