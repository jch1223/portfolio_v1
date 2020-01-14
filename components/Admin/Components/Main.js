import React from 'react';
// import '../CSS/Main.scss';
// import MutationCreator from "../API/Mutation";
// import client from "../client";
import cookie from 'react-cookies';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'jsm@carveryday.com',
      password: '',
      permission: ''
    };
  }

  handleChange = e => {
    if (e.target.name === 'email') {
      this.setState({ email: e.target.value });
    } else if (e.target.name === 'password') {
      this.setState({ password: e.target.value });
    }
  };

  async componentDidMount() {
    await cookie.remove('token');
  }

  render() {
    return (
      <div className='container'>
        <div className='contents'>
          <div className='card'>
            <div className='card-image'>
              <img
                src='https://www.chabot.kr/images/chabot_admin_logo.png'
                alt='Placeholder image'
                className=''
              />
            </div>
            <div className='card-content'>
              <div className='slogan'>
                Simpler,
                <br />
                Smarter for You
              </div>
              <div className='login-box'>
                <div className='input-row'>
                  <input
                    placeholder='회사 이메일'
                    name='email'
                    type='text'
                    onChange={this.handleChange}
                    value='jsm@carveryday.com'
                  ></input>
                </div>
                <div className='input-row'>
                  <input
                    placeholder='비밀번호'
                    name='password'
                    type='password'
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className='input-row'>
                  <button className='login-button' onClick={this.loginButtonClicked}>
                    로그인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  loginButtonClicked = async () => {
    try {
      await cookie.remove();
      const data = {
        email: this.state.email,
        password: this.state.password,
        permission: 'admin'
      };
      // const response = await client.mutate({
      //   mutation: MutationCreator.adminLogin(data)
      // });
      // const token = response.data.adminLogin;

      await cookie.save('token', 'testToken');

      // if (token) {
      alert('환영합니다. 좋은하루 되세요!');
      return this.props.history.push('dashboard');
      // } else {
      //   return alert("아이디 또는 비밀번호가 올바르지 않습니다.");
      // }
    } catch (err) {
      console.log(err);
      if (err.errors) {
        this.setState({ errMsg: '아이디 또는 비밀번호가 올바르지 않습니다.' });
      }
    }
  };
}

export default Main;
