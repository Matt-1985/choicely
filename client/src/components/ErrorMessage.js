import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  font-size: 18px;
  position: relative;
  width: 200px;
  height: 100px;
  border: none;
  border-radius: 12px;
  background-color: var(--decision-primary-color);
  color: #607a94;
  font-family: "AtamiRegular";
`;

const Outline = styled.div`
  position: absolute;
  right: 6px;
  left: -6px;
  top: 6px;
  width: 200px;
  height: 100px;
  border: 2.5px solid #607a94;
  border-radius: 12px;
  opacity: 3;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = ({ title }) => {
  return (
    <Container>
      <Outline>
        <h3>{title}</h3>
      </Outline>
    </Container>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  title: PropTypes.string,
};
