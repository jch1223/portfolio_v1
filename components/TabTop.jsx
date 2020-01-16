import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import Index from '../pages';

const IndexButton = styled(Button)`
  width: 185px;
  height: 48px;
  font-size: 19px;
  font-weight: bold;
  background: #29adb3;
  color: #fff;
  border-radius: 30px;
  border: 0;
  @media (max-width: 768px) {
    width: 148px;
    height: 38px;
    line-height: 27px;
    font-size: 14px;
  }
`;

const TabPaneStyled = styled(TabPane)``;

const TabTopStyled = styled.div`
  overflow: hidden;
  .btnWrap {
    margin-left: 50px;
    margin-top: 23px;
  }
  .leftContent {
    display: inline-block;
    padding-top: 115px;
    width: 49%;
  }
  .rightContent {
    float: right;
    width: 49%;
  }
  .rightContent .img {
    height: 680px;
    margin-top: 50px;
    text-align: right;
    /* margin-left: 131px; */
    /* background: url('/static/service/service1.jpg') no-repeat; */
    img {
      width: 350px;
      display: inline-block;
      margin-right: 50px;
    }
  }
  .brandInfo .title {
    font-size: 50px;
    font-weight: bold;
    margin-left: 50px;
    margin-bottom: 30px;
    p {
      margin: 0;
      height: 80px;
    }
  }
  .brandInfo h1 {
    font-size: 77px;
    font-weight: bold;
  }
  .desc {
    margin-left: 50px;
    max-width: 536px;
    font-size: 20px;
    word-break: keep-all;
  }

  @media (max-width: 768px) {
    margin-bottom: 39px;
    .btnWrap {
      margin-left: 0px;
      margin-top: -20px;
      text-align: center;
    }
    .rightContent {
      float: none;
      width: 100%;
    }
    .rightContent .img {
      margin: 0;
      height: 550px;
    }
    .rightContent .img img {
      /* background: url('/static/service/service1.jpg') no-repeat; */
      width: 100%;
    }
    .leftContent {
      padding-left: 20px;
      padding-top: 50px;
      width: 100%;
    }
    .brandInfo .title {
      margin-left: 0;
      font-size: 39px;
      p {
        margin: 0;
        height: 56px;
      }
    }
    .brandInfo h1 {
      font-size: 44px;
      font-weight: bold;
    }
    .desc {
      font-size: 15px;
      text-align: center;
      word-break: keep-all;
      margin-left: 0;
      margin-bottom: 30px;
      font-weight: bold;
      padding-left: 20px;
    }
  }
`;

const NavStyled = styled(Nav)`
  font-size: 30px;
  margin-top: 60px;
  border: 0;

  li {
    border-bottom: 3px solid #ededed;
  }
  li:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    li {
      width: 33.3333%;
      font-size: 18px;
      border-bottom: 1px solid #ededed;
    }
  }
`;

const NavItemStyled = styled(NavItem)`
  width: 16.6666%;
  text-align: center;
  a {
    font-size: 20px;
    padding: 19px 0;
    margin-bottom: -3px !important;
    /* transition: border-bottom 0.5s ease; */
  }
  a:hover {
    border: 0;
  }
  .active {
    border: 0;
    border-bottom: 3px solid #29adb3 !important;
  }
  @media (max-width: 768px) {
    margin-bottom: 0 !important;
    a {
      padding: 5px;
    }
    .active {
      border-bottom: 1px solid #29adb3 !important;
    }
  }
`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <TabTopStyled>
        <NavStyled tabs>
          <NavItemStyled>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}>
              마이매칭
            </NavLink>
          </NavItemStyled>
          <NavItemStyled>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}>
              안전운전
            </NavLink>
          </NavItemStyled>
          <NavItemStyled>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}>
              자동차보험
            </NavLink>
          </NavItemStyled>
          <NavItemStyled>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => {
                this.toggle('4');
              }}>
              자동차금융
            </NavLink>
          </NavItemStyled>
          <NavItemStyled>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => {
                this.toggle('5');
              }}>
              실시간시세
            </NavLink>
          </NavItemStyled>
          <NavItemStyled>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => {
                this.toggle('6');
              }}>
              커뮤니티
            </NavLink>
          </NavItemStyled>
        </NavStyled>
        <TabContent activeTab={this.state.activeTab}>
          <TabPaneStyled tabId='1'>
            <TabTopStyled>
              <Row>
                <Col sm='12'>
                  <div className='leftContent'>
                    <div className='brandInfo'>
                      <div className='title'>
                        <p>나에게 필요한</p>
                        <p>자동차 정보를</p>한 번에!
                      </div>
                    </div>
                  </div>
                  <div className='rightContent'>
                    <div className='img'>
                      <img src='/static/service/service1.png' alt='서비스1' />
                    </div>
                  </div>
                  <div className='desc'>
                    나와 자동차를 연결하는 모든 정보를 수집하여
                    <br /> 꼭 나에게 필요한 것만 모아서 모든 혜택을 누려보세요
                  </div>
                </Col>
              </Row>
            </TabTopStyled>
          </TabPaneStyled>
          <TabPaneStyled tabId='2'>
            <TabTopStyled>
              <Row>
                <Col sm='12'>
                  <div className='leftContent'>
                    <div className='brandInfo'>
                      <div className='title'>
                        <p>나의</p>
                        <p>자동차 운전습관을</p>점수로!
                      </div>
                    </div>
                  </div>
                  <div className='rightContent'>
                    <div className='img'>
                      <img src='/static/service/service2.png' alt='서비스2' />
                    </div>
                  </div>
                  <div className='desc'>
                    자동차를 운전하는 습관에 따라운전점수를 알려주고
                    <br /> 안전운행을 통한 추가 혜택을 받아보세요
                  </div>
                </Col>
              </Row>
            </TabTopStyled>
          </TabPaneStyled>
          <TabPaneStyled tabId='3'>
            <TabTopStyled>
              <Row>
                <Col sm='12'>
                  <div className='leftContent'>
                    <div className='brandInfo'>
                      <div className='title'>
                        <p>나에게 딱 맞는</p>
                        <p>자동차 보험을</p>손쉽게
                      </div>
                    </div>
                  </div>
                  <div className='rightContent'>
                    <div className='img'>
                      <img src='/static/service/service3.png' alt='서비스3' />
                    </div>
                  </div>
                  <div className='desc'>
                    내 자동차 보험이 어떤 혜택을 가지고 있는지
                    <br /> 만기일은 언제인지 가장 저렴한 보험사는 어디인지
                    <br /> 한 눈에 확인하세요
                    <br />
                  </div>
                  <div className='btnWrap'>
                    <a
                      href='https://partner.chabot.kr/index.php?gubun=home&sub_gubun=intro&pcode=p0005&detail_gubun='
                      target='_blank'>
                      <IndexButton>보험 비교견적</IndexButton>
                    </a>
                  </div>
                </Col>
              </Row>
            </TabTopStyled>
          </TabPaneStyled>
          <TabPaneStyled tabId='4'>
            <TabTopStyled>
              <Row>
                <Col sm='12'>
                  <div className='leftContent'>
                    <div className='brandInfo'>
                      <div className='title'>
                        <p>나만 모르는</p>
                        <p>자동차 금융을</p>빠르게
                      </div>
                    </div>
                  </div>
                  <div className='rightContent'>
                    <div className='img'>
                      <img src='/static/service/service4.png' alt='서비스4' />
                    </div>
                  </div>
                  <div className='desc'>
                    자동차 구입방식에 따라 최적의 금융상품을 찾아주고
                    <br /> 빠르게 실행까지 될 수 있는 새로운 금융서비스를
                    <br /> 만나보세요
                  </div>
                </Col>
              </Row>
            </TabTopStyled>
          </TabPaneStyled>
          <TabPaneStyled tabId='5'>
            <TabTopStyled>
              <Row>
                <Col sm='12'>
                  <div className='leftContent'>
                    <div className='brandInfo'>
                      <div className='title'>
                        <p>나와 함께한</p>
                        <p>자동차의 시세를</p>간편하게
                      </div>
                    </div>
                  </div>
                  <div className='rightContent'>
                    <div className='img'>
                      <img src='/static/service/service5.png' alt='서비스5' />
                    </div>
                  </div>
                  <div className='desc'>
                    자동차 판매를 위해 빠르게 평균 시세를 확인하고
                    <br /> 판매까지 한 번에 가능한 새로운 방식의
                    <br /> 자동차 판매를 경험하세요
                  </div>
                </Col>
              </Row>
            </TabTopStyled>
          </TabPaneStyled>
          <TabPaneStyled tabId='6'>
            <TabTopStyled>
              <Row>
                <Col sm='12'>
                  <div className='leftContent'>
                    <div className='brandInfo'>
                      <div className='title'>
                        <p>나와 하나되는</p>
                        <p>자동차 세상을</p>만들어가다
                      </div>
                    </div>
                  </div>
                  <div className='rightContent'>
                    <div className='img'>
                      <img src='/static/service/service6.png' alt='서비스6' />
                    </div>
                  </div>
                  <div className='desc'>
                    관심있는 자동차 정보를 공유하며 오직
                    <br /> 자동차로 소통하는 완전한 카 라이프 커뮤니티네트워크를
                    <br /> 차봇을 통해 완성하세요
                  </div>
                </Col>
              </Row>
            </TabTopStyled>
          </TabPaneStyled>
        </TabContent>
      </TabTopStyled>
    );
  }
}
