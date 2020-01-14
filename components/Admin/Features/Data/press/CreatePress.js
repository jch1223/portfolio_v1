import React, { Component, useCallback, useRef } from 'react';
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

const FileUploadButton = props => {
  const inputEle = useRef(null);
  const fileSelect = useCallback(() => {
    inputEle.current.click();
  }, [inputEle.current]);

  const fileUpdate = useCallback(() => {
    props.setFiles(inputEle.current.files[0]);
  }, [inputEle.current]);
  return (
    <>
      <input ref={inputEle} type={'file'} style={{ display: 'none' }} onChange={fileUpdate} />
      <button onClick={fileSelect}>Select Files...</button>
    </>
  );
};

export default class CreateRecruit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imgUrl: '',
      newsUrl: '',
      company: '',
      content: ''
    };
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
  // setContent = val => {
  //   this.setState((preState, props) => {
  //     return {
  //       ...preState,
  //       content: val
  //     };
  //   });
  // };

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
            {!!this.state.imgUrl.length && <img src={this.state.imgUrl} alt='news_img' />}
            <FileUploadButton setFiles={this.handleImgFile} />
            <p style={pTagStyle}>보도사</p>
            <input
              name='company'
              style={{ width: '100%' }}
              value={this.state.company}
              onChange={this.inputHandler}
            />
            <p style={pTagStyle}>Content</p>
            {/* <QuillWysiwyg value={this.state.content} onChange={this.setContent} /> */}
            <textarea
              name='content'
              style={textareaStyled}
              value={this.state.content}
              onChange={this.inputHandler}></textarea>
          </div>
          <button onClick={this.submitContent}>등록</button>
        </Body>
      </Container>
    );
  }

  submitContent = async () => {
    try {
      const res = await axios.post('/api/press', this.state);
      // console.log(res);
    } catch (e) {
      console.error('Error on submitContent: ', e);
    }

    this.props.history.push('/admin/press');
  };

  handleImgFile = async imgFile => {
    try {
      const form = new FormData();
      // console.log(imgFile);
      form.append('news_img', imgFile);
      const options = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      const { data } = await axios.post('/api/file', form, options);
      this.setState(prevState => ({
        ...prevState,
        imgUrl: '/api/file/' + data.file_path
      }));
    } catch (e) {
      console.error(e);
      alert('파일 업로드에 실패하였습니다');
    }
  };
}
