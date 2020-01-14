import React from 'react';
// import client from '../client';
// import QueryCreator from '../API/Query';
import cookie from 'react-cookies';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import '../CSS/Main.scss';
import Navbar from './Navigation/Navbar';
import NoticeList from '../Features/Data/Notice/NoticeList';
import CreateNotice from '../Features/Data/Notice/CreateNotice';
import NoticeDetail from '../Features/Data/Notice/NoticeDetail';
import UpdateNotice from '../Features/Data/Notice/UpdateNotice';
import RecruitList from '../Features/Data/Recruit/RecruitList';
import CreateRecruit from '../Features/Data/Recruit/CreateRecruit';
import RecruitDetail from '../Features/Data/Recruit/RecruitDetail';
import UpdateRecruit from '../Features/Data/Recruit/UpdateRecruit';
import PressList from '../Features/Data/Press/PressList';
import CreatePress from '../Features/Data/Press/CreatePress';
import PressDetail from '../Features/Data/Press/PressDetail';
import UpdatePress from '../Features/Data/Press/UpdatePress';
import KioskList from '../Features/Data/Service/Kiosk/KioskList';
import KioskDetail from '../Features/Data/Service/Kiosk/KioskDetail';
import BizCompanyList from '../Features/Data/Service/BizCompany/BizCompanyList';
import BizCompanyDetail from '../Features/Data/Service/BizCompany/BizCompanyDetail';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  componentDidMount = async () => {
    var token = await cookie.load('token');
    if (!token) {
      //   alert('잘못된 접근입니다!');
      //   await cookie.remove('token');
      //   // this.props.history.replace('/');
    } else {
      // var isAdmin = await client.query({ query: QueryCreator.adminCheck() });
      // if (!isAdmin.data.adminCheck) {
      //   alert('로그인 시간이 만료되었습니다!');
      //   cookie.remove('token');
      //   this.props.history.replace('/');
      // }
    }
  };

  render() {
    return (
      <div className='flex-container'>
        <Navbar history={this.props.history} />
        <div className='contents'>
          <Switch>
            <Route exact path={'/admin'} component={() => <></>} />
            {/* <Redirect exact from={'/admin'} to={'/admin/dashboard'} /> */}
            <Route path={'/admin/notice/update'} component={UpdateNotice} />
            <Route path={'/admin/notice/create'} component={CreateNotice} />
            <Route path={'/admin/notice/:id'} component={NoticeDetail} />
            <Route path={'/admin/notice'} component={NoticeList} />

            <Route path={'/admin/recruit/update'} component={UpdateRecruit} />
            <Route path={'/admin/recruit/create'} component={CreateRecruit} />
            <Route path={'/admin/recruit/:id'} component={RecruitDetail} />
            <Route path={'/admin/recruit'} component={RecruitList} />

            <Route path={'/admin/press/update'} component={UpdatePress} />
            <Route path={'/admin/press/create'} component={CreatePress} />
            <Route path={'/admin/press/:id'} component={PressDetail} />
            <Route path={'/admin/press'} component={PressList} />

            <Route path={'/admin/service/kiosk/:id'} component={KioskDetail} />
            <Route path={'/admin/service/kiosk'} component={KioskList} />

            <Route path={'/admin/service/bizCompany/:id'} component={BizCompanyDetail} />
            <Route path={'/admin/service/bizCompany'} component={BizCompanyList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default DashBoard;
