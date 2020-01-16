/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ChabotButton from './ChabotButton';
import styled from 'styled-components';
import parse from 'html-react-parser';

const ModalStyled = styled(Modal)`
  max-width: 690px;
  .bottom {
    height: 50px;
  }
  @media (max-width: 768px) {
    margin: 20px auto;
    max-width: 410px;
  }
`;

const ModalHeaderStyled = styled(ModalHeader)`
  border: 0;
  .modal-title {
    width: 100%;
    font-weight: bold;
    text-align: center;
    font-size: 35px;
    padding: 35px 0;
    margin-left: 45px;
  }
  .close {
    padding: 0rem 1rem;
  }
  span {
    font-size: 54px;
  }
  @media (max-width: 768px) {
    .modal-title {
      font-size: 21px;
      padding: 11px 0;
    }
    .modal-body {
      padding: 0 1rem;
    }
    span {
      font-size: 35px;
    }
  }
`;

const ModalBodyStyled = styled(ModalBody)`
  margin: 0 62px;
  margin-bottom: 40px;
  .ql-editor {
    padding: 0;
  }
  p {
    font-size: 15px;
    margin: 0;
  }
  @media (max-width: 768px) {
    margin: auto;
    p {
      word-break: keep-all;
      font-size: 10px;
    }
  }
`;

class RecruitModal extends React.Component {
  handleLink = () => {
    window.open(`${this.props.content[0].url}`);
  };

  render() {
    return (
      <div>
        <ModalStyled
          isOpen={this.props.layer}
          toggle={this.props.layerClose}
          className={this.props.className}>
          <ModalHeaderStyled toggle={this.props.layerClose}>
            {this.props.content[0].title}
          </ModalHeaderStyled>
          {/* {console.log(this.props.content[0])} */}
          <ModalBodyStyled>
            <div className='ql-editor'>{parse(this.props.content[0].content)}</div>
          </ModalBodyStyled>
          <ChabotButton name='탑승하기' onClick={this.handleLink}></ChabotButton>
          <div className='bottom'></div>
        </ModalStyled>
      </div>
    );
  }
}

export default RecruitModal;
