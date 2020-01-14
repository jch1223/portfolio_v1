/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ChabotButton from './ChabotButton';
import styled from 'styled-components';
import axios from 'axios';

const ModalStyled = styled(Modal)`
  max-width: 690px;
  .bottom {
    height: 30px;
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
    padding-top: 35px;
    margin-left: 45px;
  }
  .close {
    padding: 0rem 1rem;
    display: none;
  }
  /* span {
    font-size: 54px;
  } */
  @media (max-width: 768px) {
    .modal-title {
      font-size: 21px;
      padding-top: 11px;
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
  .inputWrap {
    margin-bottom: 10px;
  }
  input {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 140px;
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`;

class ServiceModal extends React.Component {
  state = {
    company: '',
    name: '',
    phone: '',
    content: ''
  };

  inputHandler = e => {
    const name = e.target.id;
    this.setState({
      [name]: e.target.value
    });
  };

  axiosHandler = () => {
    const serviceName = this.props.serviceName;
    axios
      .post(`/api/service/${serviceName}`, {
        ...this.state
      })
      .then(res => {
        this.props.layerClose();
        alert('문의가 완료되었습니다.');
      })
      .catch(function(error) {
        console.log(error);
      });
    // console.log(this.state);
    // console.log(this.props.serviceName);
  };

  render() {
    const { company, name, phone, content } = this.state;
    return (
      <div>
        <ModalStyled
          isOpen={this.props.layer}
          toggle={this.props.layerClose}
          className={this.props.className}>
          <ModalHeaderStyled toggle={this.props.layerClose}>문의하기</ModalHeaderStyled>
          <ModalBodyStyled>
            <div className='inputWrap'>
              <div className='title'>상호</div>
              <input
                id='company'
                type='text'
                vlaue={company}
                onChange={this.inputHandler}
                placeholder='차봇'
              />
            </div>
            <div className='inputWrap'>
              <div className='title'>담당자 이름</div>
              <input
                id='name'
                type='text'
                vlaue={name}
                onChange={this.inputHandler}
                placeholder='차보훈'
              />
            </div>
            <div className='inputWrap'>
              <div className='title'>연락처</div>
              <input
                id='phone'
                type='number'
                vlaue={phone}
                onChange={this.inputHandler}
                placeholder='01012345678'
              />
            </div>
            <div className='inputWrap'>
              <div className='title'>내용</div>
              <textarea id='content' type='text' vlaue={content} onChange={this.inputHandler} />
            </div>
          </ModalBodyStyled>
          <ChabotButton name='문의하기' onClick={this.axiosHandler}></ChabotButton>
          <div className='bottom'></div>
        </ModalStyled>
      </div>
    );
  }
}

export default ServiceModal;
