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
      .get('/api/press')
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
            tableTitle={'보도자료'}
            subTitle={'*'}
            itemHeader={['제목', '보도사', '등록날짜']}
            itemList={this.state.list}
            itemType={'press'}
            useRegister={true}
            linkUrl={'/admin/press'}
            buttonUrl={'/admin/press/create'}
            usePagination={false}
            userLink={true}
          />
        </Body>
      </Container>
    );
  }
}
