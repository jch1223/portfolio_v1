import { Button } from 'reactstrap';

import styled from 'styled-components';

const ChabotButtonStyled = styled.div`
  text-align: center;
  button:hover {
    background-color: #32acb3;
    /* border-color: #32acb3; */
  }
`;

const ButtonStyled = styled(Button)`
  width: 185px;
  height: 48px;
  font-size: 20px;
  background: #fff;
  color: #252527;
  border: 2px solid #313131;
  border-radius: 30px;
  line-height: 32px;
  font-weight: bold;
  @media (max-width: 768px) {
    line-height: 24px;
    width: 100px;
    height: 30px;
    font-size: 18px;
    padding: 1px;
    padding-left: 3px;
  }
`;

const ChabotButton = props => {
  return (
    <ChabotButtonStyled>
      <ButtonStyled onClick={props.onClick}>{props.name}</ButtonStyled>
    </ChabotButtonStyled>
  );
};

export default ChabotButton;
