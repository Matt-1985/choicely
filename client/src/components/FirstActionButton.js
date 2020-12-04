import React from "react";
import styled from "styled-components/macro";

const ActionButton = styled.button`
  position: relative;
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 50%;
  background-color: var(--decision-primary-color);
  :hover {
    -webkit-animation: heartbeat 2.5s ease-in-out infinite both;
    animation: heartbeat 1.5s ease-in-out infinite both;

    @-webkit-keyframes heartbeat {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
    @keyframes heartbeat {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
  }
  span {
    color: #fbfbfb;
  }
`;

const Outline = styled.div`
  position: absolute;
  right: 6px;
  left: -6px;
  top: 6px;
  width: 200px;
  height: 200px;
  border: 1px solid #607a94;
  border-radius: 50%;
  opacity: 3;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FirstActionButton() {
  return (
    <ActionButton>
      <Outline />
      <span>Was gibts heute zu essen?</span>
    </ActionButton>
  );
}
