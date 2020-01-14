import React, { Component, Fragment } from 'react';
// import {Query} from '@apollo/react-components';
// import QueryCreator from '../../../API/Query';
import parse from 'html-react-parser';
import {
  Container,
  Header,
  Body,
  Space,
  RegisterButton,
  TitleWrapper,
  Title,
  SubTitle
} from '../../Common/StyleComponent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const ButtonStyled = styled(RegisterButton)`
  margin-left: 10px;
  :hover {
    cursor: pointer;
  }
`;

const NoticeStyled = styled.div`
  .content {
    border-top: 2px #29adb2 solid;
    padding-top: 20px;
  }
`;

export default class PressDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressId: this.props.match.params.id,
      item: {
        title: '',
        imgUrl: '',
        newsUrl: '',
        company: '',
        content: ''
      }
    };
    // console.log(this.props.match.params.id);
  }
  componentDidMount() {
    axios.get(`/api/press/${this.state.pressId}`).then(res => {
      this.setState({
        item: res.data[0]
      });
      // console.log(this.state.item);
    });
  }
  deleteHandler = () => {
    axios.delete(`/api/press/${this.state.pressId}`).then(this.props.history.push('/admin/press'));
  };

  render() {
    const { item } = this.state;
    return (
      <Container>
        <Header></Header>
        <Body>
          <Space space='30px' />
          <TitleWrapper>
            <Title>제목 : {item.title}</Title>
            <Title>url : {item.newsUrl}</Title>
            <SubTitle>
              <div className='tag'>{item.tag}</div>
            </SubTitle>
            <SubTitle>
              <div className='subtitle1'>{item.company}</div>
            </SubTitle>
            <Link
              to={{
                pathname: `/admin/press/update`,
                state: {
                  item: this.state.item
                }
              }}>
              <RegisterButton>수정</RegisterButton>
            </Link>
            {/* <Link to={`/admin/press`}> */}
            <ButtonStyled onClick={this.deleteHandler}>삭제</ButtonStyled>
            {/* </Link> */}
          </TitleWrapper>
          <NoticeStyled>
            <div className='content ql-editor'>{parse(item.content)}</div>
          </NoticeStyled>
        </Body>
      </Container>
    );
  }
}
