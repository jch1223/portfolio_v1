import React, { Component } from 'react';
// import { Query } from '@apollo/react-components';
// import QueryCreator from '../../../API/Query';
import {
  Container,
  Header,
  Body,
  Space,
  TitleWrapper,
  Title,
  SubTitle,
  Description,
  Contents,
  InputFrom,
  Input,
  SubmitButton,
  Dropdown
} from '../../Common/StyleComponent';
import QuillWysiwyg from '../../../../QuillWysiwyg';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
// import MutationCreator from '../../../API/Mutation';
// import client from '../../../client';
const pTagStyle = {
  margin: 0
};
const textareaStyled = {
  width: '100%',
  height: '400px'
};

export default class CreateCar extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.location.state.item };
  }
  inputHandler = e => {
    e.persist();
    const { value, name } = e.target;
    this.setState((preState, props) => {
      return {
        ...preState,
        [name]: value
      };
    });
    // console.log(this.state);
  };
  setContent = val => {
    this.setState((preState, props) => {
      return {
        ...preState,
        content: val
      };
    });
  };

  render() {
    return (
      <Container>
        <Header></Header>
        <Body>
          <Space space={'30px'} />
          <TitleWrapper>
            <Title>보도자료 등록</Title>
            <SubTitle>*</SubTitle>
          </TitleWrapper>
          <div style={{ backgroundColor: 'white', padding: '1em', height: '100%' }}>
            <p style={pTagStyle}>제목</p>
            <input
              name='title'
              style={{ width: '100%' }}
              value={this.state.title}
              onChange={this.inputHandler}
            />
            <p style={pTagStyle}>보도자료 url</p>
            <input
              name='newsUrl'
              style={{ width: '100%' }}
              value={this.state.newsUrl}
              onChange={this.inputHandler}
            />
            <p style={pTagStyle}>이미지 url</p>
            <input
              name='imgUrl'
              style={{ width: '100%' }}
              value={this.state.imgUrl}
              onChange={this.inputHandler}
            />
            <p style={pTagStyle}>보도사</p>
            <input
              name='company'
              style={{ width: '100%' }}
              value={this.state.company}
              onChange={this.inputHandler}
            />
            <p style={pTagStyle}>Content</p>
            <textarea
              name='content'
              style={textareaStyled}
              value={this.state.content}
              onChange={this.inputHandler}></textarea>
            {/* <QuillWysiwyg value={this.state.content} onChange={this.setContent} /> */}
          </div>
          <button onClick={this.submitContent}>수정</button>
        </Body>
      </Container>
    );
  }

  submitContent = async () => {
    try {
      // console.log('state', this.state);
      const res = await axios.put(`/api/press/${this.state.id}`, this.state);
      // console.log(res);
    } catch (e) {
      console.error('Error on submitContent: ', e);
    }

    this.props.history.push(`/admin/press/${this.state.id}`);
  };
}
