import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

import DropDown from './DropDown';
import '../../CSS/Navbar.scss';
// import logo from '../../Public/logo-chabot.png';

/* <DropDown
    value='차봇 데이터'
    // isClicked={this.state.isOpen === "차봇 데이터"}
    // onClick={this.toggleDropDownItem}
    subMenu={[
      { subTitle: '브랜드', path: '/admin/dashboard/brand' },
      { subTitle: '차량', path: '/admin/dashboard/car' },
      { subTitle: '전시장', path: '/admin/dashboard/showroom' }
    ]}
  /> */

const dropdownMenuData = [
  {
    value: '채용',
    subMenu: [
      {
        subTitle: '새로 등록',
        path: '/admin/recruit/create'
      },
      {
        subTitle: '글 목록',
        path: '/admin/recruit'
      }
    ]
  },
  {
    value: '기사',
    subMenu: [
      {
        subTitle: '새로 등록',
        path: '/admin/press/create'
      },
      {
        subTitle: '글 목록',
        path: '/admin/press'
      }
    ]
  },
  {
    value: '공지사항',
    subMenu: [
      {
        subTitle: '새로 등록',
        path: '/admin/notice/create'
      },
      {
        subTitle: '글 목록',
        path: '/admin/notice'
      }
    ]
  },
  {
    value: '서비스 문의사항',
    subMenu: [
      {
        subTitle: 'Kiosk',
        path: '/admin/service/kiosk'
      },
      {
        subTitle: 'Biz(기업)',
        path: '/admin/service/bizCompany'
      }
    ]
  }
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: ''
    };
  }

  toggleDropDownItem = dropName => () => {
    if (dropName === this.state.isOpen) {
      return this.setState({ isOpen: null });
    }

    this.setState({ isOpen: dropName });
  };

  _logout = async () => {
    await cookie.remove('token');
    this.props.history.replace('/');
    alert('로그아웃 되었습니다!');
  };

  render() {
    return (
      <div className='side-bar'>
        <Link to='/admin'>
          <div className='image-wrapper'>
            <img src={'/static/admin/logo-chabot.png'} alt='logo' />
          </div>
        </Link>
        {dropdownMenuData.map((menuData, idx) => (
          <DropDown
            key={idx}
            isClicked={this.state.isOpen === menuData.value}
            onClick={this.toggleDropDownItem(menuData.value)}
            {...menuData}
          />
        ))}
      </div>
    );
  }
}

export default Navbar;
