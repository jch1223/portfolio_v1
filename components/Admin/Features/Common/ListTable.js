import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

import {
  Space,
  FlexEndWrapper,
  TitleWrapper,
  Title,
  SubTitle,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  RegisterButton
} from './StyleComponent';

class ListTable extends Component {
  static propTypes = {
    //Title
    tableTitle: PropTypes.string,
    subTitle: PropTypes.string,

    //List
    itemType: PropTypes.string,
    itemHeader: PropTypes.array.isRequired,
    itemList: PropTypes.array,
    useLink: PropTypes.bool,
    linkUrl: PropTypes.string,
    idParam: PropTypes.string,

    //RegisterButton
    useRegister: PropTypes.bool,
    buttonUrl: PropTypes.string,

    //Pagination
    usePagination: PropTypes.bool,

    //Filter.
    selectType: PropTypes.string
  };
  static defaultProps;

  constructor(props) {
    super(props);
    this.state = {};

    this.createTableHeader = this.createTableHeader.bind(this);
    this.createTableRow = this.createTableRow.bind(this);
  }

  render() {
    return (
      <Fragment>
        <TitleWrapper>
          {this.props.tableTitle && <Title>{this.props.tableTitle}</Title>}
          {this.props.subTitle && <SubTitle>{this.props.subTitle}</SubTitle>}
          {this.props.useRegister && (
            <Link to={this.props.buttonUrl ? this.props.buttonUrl : '/dashboard'}>
              <RegisterButton>신규등록</RegisterButton>
            </Link>
          )}
        </TitleWrapper>
        <Table>
          <TableBody>
            <TableRow>{this.createTableHeader()}</TableRow>
            {this.createTableRow()}
          </TableBody>
        </Table>
      </Fragment>
    );
  }

  createTableHeader() {
    return this.props.itemHeader.map((item, id) => {
      return <TableHeader key={id}>{item}</TableHeader>;
    });
  }

  createTableRow() {
    if (this.props.itemList) {
      return this.props.itemList.map((item, id) => {
        return (
          item.isDeleted === 'N' && (
            <Link to={this.props.linkUrl + '/' + item.index} key={item.index}>
              <ListItem key={item.index} item={item} type={this.props.itemType}></ListItem>
            </Link>
          )
        );
      });
    }
  }
}

export default ListTable;
