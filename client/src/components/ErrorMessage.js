import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  font-size: 12px;
  position: relative;
  width: 20rem;
  height: 200px;
  border: none;
  border-radius: 12px;
  background-color: var(--decision-primary-color);
  color: var(--guidance-color);
  font-family: "AtamiRegular";
`;

const Outline = styled.div`
  position: absolute;
  right: 6px;
  left: -6px;
  top: 6px;
  width: 20rem;
  height: 200px;
  border: 2.5px solid #607a94;
  border-radius: 12px;
  opacity: 3;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H3 = styled.h3`
  text-align: center;
  padding: 1.5px;
`;

const ErrorMessage = ({ title }) => {
  return (
    <Container>
      <Outline>
        <H3>{title}</H3>
      </Outline>
    </Container>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  title: PropTypes.string,
};
