import React from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';
import Container from './Container';

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
                <img src='/static/logo/logo.png' alt='로고이미지' />
              </a>
            </Link>
          ) : (
            <a className='logoImg'>
              <img src='/static/logo/logo.png' style={{ visibility: 'hidden' }} alt='로고이미지' />
            </a>
          )}

          <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />

          <Collapse isOpen={!this.state.collapsed} navbar style={{ height: '100vh' }}>
            <Container>
              <div className='menu'>
                <Link href='/intro/whoami'>
                  <a className='menuTitle'>INTRO</a>
                </Link>
                <ul>
                  <li>
                    <Link href='/intro/whoami'>
                      <a className='subMenu'>소개</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/intro/project'>
                      <a className='subMenu'>프로젝트</a>
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
