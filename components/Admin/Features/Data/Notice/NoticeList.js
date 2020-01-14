import React, { Component } from 'react';
// import { Query } from '@apollo/react-components';
// import QueryCreator from '../../../API/Query';
import Filter from '../../Common/Filter';
import ListTable from '../../Common/ListTable';
import { Body, Container, Header, Space } from '../../Common/StyleComponent';
import axios from 'axios';

export default class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/notice')
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
            tableTitle={'공지사항'}
            subTitle={'*'}
            itemHeader={['제목', '날짜']}
            itemList={this.state.list}
            itemType={'notice'}
            useRegister={true}
            linkUrl={'/admin/notice'}
            buttonUrl={'/admin/notice/create'}
            usePagination={false}
            userLink={true}
          />
        </Body>
      </Container>
    );
  }
}
