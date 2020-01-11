import React from "react";
import styled, { keyframes } from "styled-components";
import Pokeball from "./Pokeball";

const bounce = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-145%);
  }
  10% {
    opacity: .5;
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: .5;
  }
  100% {
    opacity: 0;
    transform: translateY(145%);
  }
`;

const Dot = styled.span`
  height: 40px;
  width: 40px;
  display: inline-block;
  margin: 20px;
  animation: ${bounce} 1s ease-in-out infinite;
  animation-delay: ${props => props.delay};
`;

const Loader = styled.div`
  ${Dot}:first-of-type {
    margin-left: 0;
  }

  ${Dot}:last-of-type {
    margin-right: 0;
  }
`;

const LoaderComponent = () => (
  <Loader>
    <Dot delay={`-200ms`}>
      <Pokeball />
    </Dot>
    <Dot delay={`-100ms`}>
      <Pokeball />
    </Dot>
    <Dot delay={`0ms`}>
      <Pokeball />
    </Dot>
  </Loader>
);

export default LoaderComponent;
