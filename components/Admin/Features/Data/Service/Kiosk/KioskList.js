import React, { Component } from 'react';
// import { Query } from '@apollo/react-components';
// import QueryCreator from '../../../API/Query';
import Filter from '../../../Common/Filter';
import ListTable from '../../../Common/ListTable';
import { Body, Container, Header, Space } from '../../../Common/StyleComponent';
import axios from 'axios';

export default class KioskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/service/kiosk')
      .then(res => {
        this.setState({
          list: res.data.items
        });
        // console.log(this.state.list);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Header></Header>
        <Body>
          <Space space='30px' />
          <ListTable
            tableTitle={'키오스크 문의사항'}
            subTitle={'*'}
            itemHeader={['상호', '담당자', '전화번호', '등록날짜']}
            itemList={this.state.list}
            itemType={'kiosk'}
            linkUrl={'/admin/service/kiosk'}
            usePagination={false}
            userLink={true}
          />
        </Body>
      </Container>
    );
  }
}
