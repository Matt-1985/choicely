import logo from "../assets/logo.svg";
import styled from "styled-components/macro";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  place-items: center;
  img {
    height: 20vh;
    width: 80vw;
  }

  .slide-in-top {
    animation: slide-in-top 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default function SplashPage() {
  return (
    <LogoContainer>
      <img src={logo} className="slide-in-top" alt="logo" />
    </LogoContainer>
  );
}
