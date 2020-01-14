import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { TableRow, TableData, Image } from './StyleComponent';

// const Image_path = 'http://3.114.118.228:4000';
class ListItem extends Component {
  static propTypes = {
    //ItemType
    type: PropTypes.string,

    //Item
    item: PropTypes.object,

    //Filter
    selectType: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {};

    this.createTableData = this.createTableData.bind(this);
  }
  render() {
    return <Fragment>{this.createTableData()}</Fragment>;
  }

  createTableData() {
    const type = this.props.type;
    if (type === 'notice') {
      const { index, title, date } = this.props.item;
      return (
        <TableRow>
          <TableData>{title}</TableData>
          <TableData>{date}</TableData>
        </TableRow>
      );
    } else if (type === 'recruit') {
      const { index, title, deadlineText, createdAt } = this.props.item;
      return (
        <TableRow>
          <TableData>{title}</TableData>
          <TableData>{deadlineText} </TableData>
          <TableData>{createdAt}</TableData>
        </TableRow>
      );
    } else if (type === 'press') {
      const { index, title, company, createdAt } = this.props.item;
      return (
        <TableRow>
          <TableData>{title}</TableData>
          <TableData>{company}</TableData>
          <TableData>{createdAt}</TableData>
        </TableRow>
      );
    } else if (type === 'kiosk') {
      const { index, company, name, phone, createdAt } = this.props.item;
      return (
        <TableRow>
          <TableData>{company}</TableData>
          <TableData>{name}</TableData>
          <TableData>{phone}</TableData>
          <TableData>{createdAt}</TableData>
        </TableRow>
      );
    } else if (type === 'bizCompany') {
      const { index, company, name, phone, createdAt } = this.props.item;
      return (
        <TableRow>
          <TableData>{company}</TableData>
          <TableData>{name}</TableData>
          <TableData>{phone}</TableData>
          <TableData>{createdAt}</TableData>
        </TableRow>
      );
    } else if (type === 'Contents') {
      const { id, title, type, created_at, updated_at } = this.props.item;

      return (
        <TableRow>
          <TableData>{id}</TableData>
          <TableData>{title}</TableData>
          <TableData>{type}</TableData>
          <TableData>{created_at}</TableData>
          <TableData>{updated_at}</TableData>
        </TableRow>
      );
    }
  }
}

export default ListItem;
