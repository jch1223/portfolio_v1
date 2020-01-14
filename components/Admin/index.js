import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import NoMatch from './Features/Error/NoMatch';
import DashBoard from './Components/DashBoard';
import Main from './Components/Main';
import './CSS/Common.scss';
import './App.scss';

const Admin = () => {
  return (
    <Router>
      <div className='App' style={{ height: '100vh' }}>
        <DashBoard />
        {/* <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/dashboard' render={props => <DashBoard {...props} />} />
          <Route component={NoMatch} />
        </Switch> */}
      </div>
    </Router>
  );
};

export default Admin;
