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

export default class CarDetailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeId: this.props.match.params.id,
      item: {
        title: '',
        content: ''
      }
    };
    // console.log(this.props.match.params.id);
  }
  componentDidMount() {
    axios.get(`/api/notice/${this.state.noticeId}`).then(res => {
      this.setState({
        item: res.data[0]
      });
      // console.log(this.state.item);
    });
  }
  deleteHandler = () => {
    axios
      .delete(`/api/notice/${this.state.noticeId}`)
      .then(this.props.history.push('/admin/notice'));
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
            <SubTitle>*</SubTitle>
            <Link
              to={{
                pathname: `/admin/notice/update`,
                state: {
                  item: this.state.item
                }
              }}>
              <RegisterButton>수정</RegisterButton>
            </Link>
            {/* <Link to={`/admin/notice`}> */}
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
