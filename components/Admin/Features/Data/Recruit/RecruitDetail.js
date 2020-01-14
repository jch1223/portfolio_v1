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

export default class RecruitDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitId: this.props.match.params.id,
      item: {
        title: '',
        tag: '',
        subtitle1: '',
        subtitle2: '',
        subtitle3: '',
        deadlineText: '',
        content: '',
        url: ''
      }
    };
    // console.log(this.props.match.params.id);
  }
  componentDidMount() {
    axios.get(`/api/recruit/${this.state.recruitId}`).then(res => {
      this.setState({
        item: res.data[0]
      });
      // console.log(this.state.item);
    });
  }
  deleteHandler = () => {
    axios
      .delete(`/api/recruit/${this.state.recruitId}`)
      .then(this.props.history.push('/admin/recruit'));
  };

  render() {
    const { item } = this.state;
    return (
      <Container>
        <Header></Header>
        <Body>
          <Space space='30px' />
          <TitleWrapper>
            <Title>{item.title}</Title>
            <SubTitle>
              <div className='tag'>{item.tag}</div>
            </SubTitle>
            <SubTitle>
              <div className='subtitle1'>{item.subtitle1 + '/'}</div>
              <div className='subtitle2'> {item.subtitle2 + '/'}</div>
              <div className='subtitle3'> {item.subtitle3}</div>
            </SubTitle>
            <SubTitle>
              <div className='deadlineText'>공고마감일 : {item.deadlineText}</div>
            </SubTitle>
            <Link
              to={{
                pathname: `/admin/recruit/update`,
                state: {
                  item: this.state.item
                }
              }}>
              <RegisterButton>수정</RegisterButton>
            </Link>
            {/* <Link to={`/admin/recruit`}> */}
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
