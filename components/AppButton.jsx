import React, { useState } from 'react';
import styled from 'styled-components';

const AppButtonStyled = styled.div`
  position: fixed;
  display: block;
  top: 520px;
  right: 40px;
  z-index: 20;
  .ios {
    display: block;
    width: 50px;
    height: 50px;
    background: url('/static/index/ios.png');
    margin-bottom: 14px;
    border: 0;
  }
  .android {
    display: block;
    width: 50px;
    height: 50px;
    background: url('/static/index/android.png');
    border: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const AppButton = props => {
  const clickHandler = e => {
    const { name } = e.target;
    let url;

    switch (name) {
      case 'ios':
        url = 'https://www.apple.com/kr/ios/app-store/';
        break;
      case 'android':
        url = 'https://play.google.com/store/apps?hl=ko';
        break;
    }

    window.open(url, 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
  };

  return (
    <AppButtonStyled>
      <button name='ios' className='ios' onClick={clickHandler}></button>
      <button name='android' className='android' onClick={clickHandler}></button>
    </AppButtonStyled>
  );
};

export default AppButton;
