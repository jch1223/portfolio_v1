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
} from '../../../Common/StyleComponent';
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

export default class BizCompanyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      item: {
        company: '',
        name: '',
        phone: '',
        content: ''
      }
    };
    // console.log(this.props.match.params.id);
  }
  componentDidMount() {
    axios.get(`/api/service/bizCompany/${this.state.id}`).then(res => {
      this.setState({
        item: res.data[0]
      });
      // console.log(this.state.item);
    });
  }
  deleteHandler = () => {
    axios
      .delete(`/api/service/bizCompany/${this.state.id}`)
      .then(this.props.history.push('/admin/service/bizCompany'));
  };

  render() {
    const { item } = this.state;
    return (
      <Container>
        <Header></Header>
        <Body>
          <Space space='30px' />
          <TitleWrapper>
            <Title>상호 : {item.company}</Title>
            <SubTitle>
              <div className='tag'>담장자: {item.name}</div>
            </SubTitle>
            <SubTitle>
              <div className='subtitle1'>핸드폰: {item.phone}</div>
            </SubTitle>
            <Link
              to={{
                pathname: `/admin/service/bizCompany`,
                state: {
                  item: this.state.item
                }
              }}>
              <RegisterButton>목록으로</RegisterButton>
            </Link>
            {/* <Link to={`/admin/service`}> */}
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
