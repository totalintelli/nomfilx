import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  // color를 props로 받아오도록 함
  color: ${(props) => props.color};
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);
// text는 Message에 불러옴. text, color는 Message에서 props를 통해 얻은 color.

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
