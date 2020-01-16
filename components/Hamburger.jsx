import React from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';
import Container from './Container';

const MenuDiv = styled.div`
  overflow: hidden;
  text-align: right;
  transition: all 0.5s ease;
  position: fixed;
  background: #fff;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  .navbar-light .navbar-toggler {
    border: 0;
  }
  button {
    font-size: 14px;
    padding: 0;
    margin: 0;
  }
  .logoImg {
    width: 100px;
    padding: 11px 0;
    float: left;
  }
  .logoImg img {
    width: 100%;
  }
  .menuTitle {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  .menu {
    text-align: left;
  }
  .subMenu {
    font-size: 15px;
  }
  .menu a {
    display: block;
    margin-bottom: 10px;
    color: #4c4c4c;
  }
  .menu li {
    font-size: 17px;
  }
  .menu a:hover {
    color: #29adb3;
  }
  ul,
  li {
    list-style: none;
    padding: 0;
    text-align: left;
  }
  a:hover {
    text-decoration: none;
  }
`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <MenuDiv>
        <Navbar color='faded' light>
          {this.state.collapsed ? (
            <Link href='/'>
              <a className='logoImg'>
                <img src='/static/top_logo.png' alt='로고이미지' />
              </a>
            </Link>
          ) : (
            <a className='logoImg'>
              <img src='/static/top_logo.png' style={{ visibility: 'hidden' }} alt='로고이미지' />
            </a>
          )}
          <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
          <Collapse isOpen={!this.state.collapsed} navbar style={{ height: '100vh' }}>
            <Container>
              <div className='menu'>
                <Link href='/chabot/service'>
                  <a className='menuTitle'>차봇하다</a>
                </Link>
                <ul>
                  <li>
                    <Link href='/chabot/service'>
                      <a className='subMenu'>서비스</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/chabot/brand'>
                      <a className='subMenu'>브랜드</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/chabot/people'>
                      <a className='subMenu'>사람들</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='menu'>
                <Link href='/with/recruit'>
                  <a className='menuTitle'>함께하다</a>
                </Link>
                <ul>
                  <li>
                    <Link href='/with/recruit'>
                      <a className='subMenu'>채용</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/with/news'>
                      <a className='subMenu'>기사</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/with/notice'>
                      <a className='subMenu'>공지사항</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
          </Collapse>
        </Navbar>
      </MenuDiv>
    );
  }
}
