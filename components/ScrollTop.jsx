import React, { useState } from 'react';
import styled from 'styled-components';

const ScrollTopStyled = styled.div`
  position: fixed;
  display: block;
  top: 350px;
  right: 10px;
  z-index: 20;
  button {
    width: 42px;
    height: 42px;
    background: url('/static/m_top.png');
    border: 0;
  }
`;

const ScrollTop = props => {
  const clickHandler = e => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollTopStyled>
      <button onClick={clickHandler}></button>
    </ScrollTopStyled>
  );
};

export default ScrollTop;
