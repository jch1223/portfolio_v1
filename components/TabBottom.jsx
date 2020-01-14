import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import Container from '../components/Container';
import classnames from 'classnames';
import styled from 'styled-components';
import { Button } from 'reactstrap';

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
    line-height: 29px;
    font-size: 14px;
  }
`;

const BrandStyled = styled.div`
  overflow: hidden;
  /* margin-bottom: 160px; */
  .leftContent {
    display: inline-block;
    width: 49%;
  }
  .rightContent {
    float: right;
    padding-top: 168px;
    width: 49%;
  }
  .bizCon {
    padding-top: 161px;
  }
  .leftContent .img {
    height: 696px;
    margin-top: 110px;
    background: url('/static/service/2_kiosk.png') no-repeat 50%;
  }
  .brandInfo {
    .subTitle,
    .subTitle2 {
      font-size: 35px;
      font-weight: 900;
      margin-bottom: 36px;
    }
    .desc {
      font-size: 30px;
      margin-bottom: 50px;
    }
  }

  .kiosk {
    .subTitle {
      color: #32acb3;
    }
    .desc {
      color: #fff;
    }
  }

  .dealer {
    .subTitle1 {
      font-size: 24px;
      color: #032c40;
    }
    .subTitle2 {
      color: #032c40;
    }
    .desc {
      color: #fff;
      font-size: 30px;
    }
    .img {
      background: url('/static/service/2_bizapp.png') no-repeat 50%;
    }
  }
  .company {
    .subTitle1 {
      font-size: 24px;
      color: #32acb3;
    }
    .subTitle2 {
      color: #32acb3;
    }
    .desc {
      color: #fff;
      font-size: 30px;
    }
    .img {
      background: url('/static/service/2_bizapp2.png') no-repeat 50%;
    }
  }

  /* .brandInfo h1 {
    font-size: 77px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 80px;
  } */
  /* .desc {
    max-width: 506px;
    font-size: 26px;
    word-break: keep-all;
    margin-bottom: 30px;
  } */

  @media (max-width: 768px) {
    /* margin-bottom: 60px; */
    .leftContent {
      /* width: 100%; */
      display: inline;
    }
    .leftContent .img {
      height: 536px;
      margin-top: 30px;
      margin-bottom: 30px;
      background: url('/static/service/m_2_kiosk.png') no-repeat 50%;
    }
    .rightContent {
      float: none;
      padding-left: 20px;
      padding-top: 50px;
      width: 100%;
    }

    .kiosk {
      .subTitle {
        font-size: 29px;
        margin-bottom: 0px;
      }
      .desc {
        font-size: 20px;
        margin-bottom: 25px;
      }
    }

    .dealer {
      .subTitle1 {
        font-size: 18px;
        color: #032c40;
      }
      .subTitle2 {
        font-size: 29px;
        color: #032c40;
        margin-bottom: 10px;
      }
      .desc {
        color: #fff;
        font-size: 20px;
        margin-bottom: 25px;
      }
      .img {
        height: 425px;
        background: url('/static/service/m_2_bizapp.png') no-repeat 50%;
      }
    }

    .company {
      .subTitle1 {
        font-size: 18px;
        color: #32acb3;
      }
      .subTitle2 {
        font-size: 29px;
        color: #32acb3;
        margin-bottom: 10px;
      }
      .desc {
        color: #fff;
        font-size: 20px;
        margin-bottom: 25px;
      }
      .img {
        height: 425px;
        background: url('/static/service/m_2_bizapp2.png') no-repeat 50%;
      }
    }
    /* .desc {
      max-width: 320px;
      font-size: 12px;
      word-break: keep-all;
      margin-bottom: 30px;
    } */
  }
`;

const NavStyled = styled.ul`
  margin: 0 !important;
  padding: 0 !important;
  li {
    display: inline-block;
    width: 217px;
    text-align: center;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
  }
  li a {
    font-size: 24px;
  }
  li a:hover {
    cursor: pointer;
    color: #fff !important;
    transition: all 0.3 ease-in-out;
  }

  .first {
    background-color: #191919 !important;
    color: #e3e3e3 !important;
  }
  .first.active {
    color: #fff !important;
  }
  .second {
    background-color: #29adb3;
    color: #e3e3e3 !important;
  }
  .second.active {
    color: #fff !important;
  }
  .thirth {
    background-color: #032c40;
    color: #e3e3e3 !important;
  }
  .thirth.active {
    color: #fff !important;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
const TabContentStyled = styled.div`
  margin-top: -7px;
  .first {
    background-color: #191919;
    color: #616161 !important;
  }
  .second {
    background-color: #29adb3;
    color: #fff !important;
  }
  .thirth {
    background-color: #032c40;
    color: #fff !important;
  }
  @media (max-width: 900px) {
    .tab-pane {
      display: block;
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
      <div>
        <Container>
          <NavStyled tabs>
            <NavItem>
              <NavLink
                className={classnames('first', { active: this.state.activeTab === '1' })}
                onClick={() => {
                  this.toggle('1');
                }}>
                KIOSK
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames('second', { active: this.state.activeTab === '2' })}
                onClick={() => {
                  this.toggle('2');
                }}>
                BIZ(딜러용)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames('thirth', { active: this.state.activeTab === '3' })}
                onClick={() => {
                  this.toggle('3');
                }}>
                BIZ(기업용)
              </NavLink>
            </NavItem>
          </NavStyled>
        </Container>
        <TabContentStyled>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane className='first' tabId='1'>
              <Container>
                <Row>
                  <Col sm='12'>
                    <BrandStyled>
                      <div className='rightContent'>
                        <div className='brandInfo kiosk'>
                          <div className='subTitle'>CHABOT KIOSK</div>
                          <div className='desc'>
                            터치 한 번으로 <br />
                            모든 자동차 정보를 해결!
                          </div>
                          <IndexButton
                            name='kiosk'
                            onClick={e => {
                              this.props.layerHandler(e);
                            }}>
                            서비스 문의하기
                          </IndexButton>
                        </div>
                      </div>
                      <div className='leftContent'>
                        <div className='img'></div>
                      </div>
                    </BrandStyled>
                  </Col>
                </Row>
              </Container>
            </TabPane>
            <TabPane className='second' tabId='2'>
              <Container>
                <Row>
                  <Col sm='12'>
                    <BrandStyled>
                      <div className='rightContent bizCon'>
                        <div className='brandInfo dealer'>
                          <div className='subTitle1'>자동차 딜러 필수 앱</div>
                          <div className='subTitle2'>CHABOT Biz APP</div>
                          <div className='desc'>
                            고객관리부터 <br /> 자동차 판매를 위한
                            <br />
                            모든 정보를 한 번에 해결!
                          </div>
                        </div>
                      </div>
                      <div className='leftContent dealer'>
                        <div className='img'></div>
                      </div>
                    </BrandStyled>
                  </Col>
                </Row>
              </Container>
            </TabPane>
            <TabPane className='thirth' tabId='3'>
              <Container>
                <Row>
                  <Col sm='12'>
                    <BrandStyled>
                      <div className='rightContent bizCon'>
                        <div className='brandInfo company '>
                          <div className='subTitle1'>기업 자동차 관리 필수 앱</div>
                          <div className='subTitle2'>CHABOT Biz(기업) APP</div>
                          <div className='desc'>
                            법인 차량관리를 위한 <br />
                            모든 기능을 한 번에 해결!
                          </div>
                          <IndexButton
                            name='bizCompany'
                            onClick={e => {
                              this.props.layerHandler(e);
                            }}>
                            서비스 문의하기
                          </IndexButton>
                        </div>
                      </div>
                      <div className='leftContent company'>
                        <div className='img'></div>
                      </div>
                    </BrandStyled>
                  </Col>
                </Row>
              </Container>
            </TabPane>
          </TabContent>
        </TabContentStyled>
      </div>
    );
  }
}
