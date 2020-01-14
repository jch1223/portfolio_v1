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
    this.state = {
      title: '',
      content: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
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
            <input style={{ width: '100%' }} value={this.state.title} onChange={this.setTitle} />
            <p>Content</p>
            <QuillWysiwyg value={this.state.content} onChange={this.setContent} />
          </div>
          <button onClick={this.submitContent}>등록</button>
        </Body>
      </Container>
    );
  }

  submitContent = async () => {
    try {
      // const _formData = new FormData();
      // Object.keys(this.state).forEach(dataKey => {
      //   _formData.append(dataKey, this.state[dataKey]);
      // });

      // const res = await axios.post('/api/notice', _formData);
      const res = await axios.post('/api/notice', this.state);

      // console.log(res);
    } catch (e) {
      console.error('Error on submitContent: ', e);
    }

    this.props.history.push('/admin/notice');

    // const response = await client.mutate({mutation: MutationCreator.adminCreateCar(), variables: {car} });

    // if (response.data.adminCreateCar === "success") {
    //     alert("등록 되었습니다!");
    //     this.props.history.push('/dashboard/car');
    // } else {
    //     alert("등록에 실패하였습니다.")
    // }
  };

  handleChangeSelect = selectedOption => {
    this.setState({ brand_id: selectedOption.value });
  };

  handleChange(e) {
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value });
    }
  }
}
