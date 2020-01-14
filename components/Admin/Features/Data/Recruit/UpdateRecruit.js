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

export default class UpdateRecruit extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.location.state.item };
    console.log(this.state);
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
            <Title>공지사항 등록</Title>
            <SubTitle>*</SubTitle>
          </TitleWrapper>
          <div style={{ backgroundColor: 'white', padding: '1em', height: '100%' }}>
            <p style={pTagStyle}>Title</p>
            <input
              name='title'
              style={{ width: '100%' }}
              value={this.state.title}
              onChange={this.inputHandler}
            />
            <p style={pTagStyle}>채용 공고 URL</p>
            <input
              name='url'
              style={{ width: '100%' }}
              value={this.state.url}
              onChange={this.inputHandler}
            />
            <p style={pTagStyle}>Tag</p>
            <input
              name='tag'
              style={{ width: '100%' }}
              value={this.state.tag}
              onChange={this.inputHandler}
            />
            <p style={pTagStyle}>subtitle</p>
            <input
              name='subtitle1'
              style={{ width: '33.3333%' }}
              value={this.state.subtitle1}
              onChange={this.inputHandler}
            />
            <input
              name='subtitle2'
              style={{ width: '33.3333%' }}
              value={this.state.subtitle2}
              onChange={this.inputHandler}
            />
            <input
              name='subtitle3'
              style={{ width: '33.3333%' }}
              value={this.state.subtitle3}
              onChange={this.inputHandler}
            />
            <p style={pTagStyle}>deadline</p>
            <input
              name='deadlineText'
              style={{ width: '100%' }}
              value={this.state.deadlineText}
              onChange={this.inputHandler}
            />
            <p>Content</p>
            <QuillWysiwyg value={this.state.content} onChange={this.setContent} />
          </div>
          <button onClick={this.submitContent}>수정</button>
        </Body>
      </Container>
    );
  }

  submitContent = async () => {
    try {
      // console.log('state', this.state);
      const res = await axios.put(`/api/recruit/${this.state.id}`, this.state);
      console.log(res);
    } catch (e) {
      console.error('Error on submitContent: ', e);
    }

    this.props.history.push(`/admin/recruit/${this.state.id}`);
  };
}
