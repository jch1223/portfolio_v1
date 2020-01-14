import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Link from 'next/link';

const BoardStyled = styled.div`
  .row {
    margin-bottom: 25px;
  }
  .row .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .date {
    text-align: right;
  }
  .noticeList {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 768px) {
    .title {
      font-size: 16px;
    }
    .date {
      font-size: 13px;
      text-align: left;
      color: #676767;
    }
    .paddingL20 {
      padding-left: 20px;
    }
  }
`;

const BoardList = props => {
  // console.log(props.limit);
  return (
    <Link
      key={props.index}
      href={`/with/notice/[id]?limit=${props.limit}`}
      as={`/with/notice/${props.index}?limit=${props.limit}`}>
      <a className='noticeList'>
        <Row className='row'>
          <Col md='9' className='title'>
            <span>{props.title}</span>
          </Col>
          <Col md='3' className='date'>
            {props.date}
          </Col>
        </Row>
      </a>
    </Link>
  );
};

export default class NoticeBoard extends React.Component {
  render() {
    return (
      <BoardStyled>
        <div className='paddingL20'>
          {this.props.items.map(item => {
            return (
              <BoardList
                key={item.index}
                index={item.index}
                title={item.title}
                date={item.date}
                limit={this.props.limit}></BoardList>
            );
          })}
        </div>
      </BoardStyled>
    );
  }
}
