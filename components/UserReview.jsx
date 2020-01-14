import React from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';

const TableStyled = styled(Table)`
  .content {
    position: relative;
  }
  .content span {
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }
`;

export default class Example extends React.Component {
  render() {
    return (
      <TableStyled borderless>
        <thead>
          <tr>
            <td style={{ minWidth: '176px' }}></td>
            <td className='content' style={{ width: '80%' }}></td>
            <td style={{ minWidth: '10%' }}></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>김 ** 고객님</td>
            <td className='content'>
              <span>내 차를 나보다 더 잘아는 느낌이네요 ㅎㅎ</span>
            </td>
            <td>2019.08.21</td>
          </tr>
          <tr>
            <td>김 ** 고객님</td>
            <td className='content'>
              <span>내 차를 나보다 더 잘아는 느낌이네요 ㅎㅎ</span>
            </td>
            <td>2019.08.21</td>
          </tr>
          <tr>
            <td>김 ** 고객님</td>
            <td className='content'>
              <span>내 차를 나보다 더 잘아는 느낌이네요 ㅎㅎ</span>
            </td>
            <td>2019.08.21</td>
          </tr>
          <tr>
            <td>김 ** 고객님</td>
            <td className='content'>
              <span>내 차를 나보다 더 잘아는 느낌이네요 ㅎㅎ</span>
            </td>
            <td>2019.08.21</td>
          </tr>
          <tr>
            <td>김 ** 고객님</td>
            <td className='content'>
              <span>내 차를 나보다 더 잘아는 느낌이네요 ㅎㅎ</span>
            </td>
            <td>2019.08.21</td>
          </tr>
          <tr>
            <td>김 ** 고객님</td>
            <td className='content'>
              <span>내 차를 나보다 더 잘아는 느낌이네요 ㅎㅎ</span>
            </td>
            <td>2019.08.21</td>
          </tr>
          <tr>
            <td>김 ** 고객님</td>
            <td className='content'>
              <span>내 차를 나보다 더 잘아는 느낌이네요 ㅎㅎ</span>
            </td>
            <td>2019.08.21</td>
          </tr>
          <tr>
            <td>김 ** 고객님</td>
            <td className='content'>
              <span>내 차를 나보다 더 잘아는 느낌이네요 ㅎㅎ</span>
            </td>
            <td>2019.08.21</td>
          </tr>
        </tbody>
      </TableStyled>
    );
  }
}
