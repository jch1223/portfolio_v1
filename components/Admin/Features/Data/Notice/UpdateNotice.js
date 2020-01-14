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

export default class CreateCar extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.location.state.item };
  }
  setTitle = e => {
    e.persist();
    this.setState((preState, props) => {
      return {
        ...preState,
        title: e.target.value
      };
    });
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
            <p>Title</p>
            <input
              style={{ width: '100%' }}
              defaultValue={this.state.title}
              onChange={this.setTitle}
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
      const res = await axios.put(`/api/notice/${this.state.id}`, this.state);
      // console.log(res);
    } catch (e) {
      console.error('Error on submitContent: ', e);
    }

    this.props.history.push(`/admin/notice/${this.state.id}`);
  };
}
