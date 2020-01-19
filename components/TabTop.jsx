import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import { Button } from 'reactstrap';

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
        <NavStyled tabs>
          <NavItemStyled>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              비교견적 서비스
            </NavLink>
          </NavItemStyled>

          <NavItemStyled>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              더 보기
            </NavLink>
          </NavItemStyled>
        </NavStyled>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
            <TabTopStyled>
              <Row>
                <Col sm='12'>
                  <div className='leftContent'>
                    <div className='project_title'>
                      <div>Introduction</div>
                    </div>

                    <div className='project_decs'>
                      next.js를 이용하여 제휴사에 들어갈 페이지 제작
                    </div>

                    <div className='project_title'>
                      <div>contribution </div>
                    </div>

                    <div className='project_decs'>
                      <p> next.js를 사용하여 구현</p>
                      <p> styled-component를 이용하여 반응형 웹 구현</p>
                      <p> Redux와 Redux-thunk를 사용하여 state 관리 </p>
                      <p> zeit now를 통한 배포</p>
                    </div>

                    <a
                      href='https://www.notion.so/jch1223/ChulHee-Jang-8795325bf91b482188e689489f8c70b3'
                      target='_blank'
                    >
                      <ButtonStyled>이력서</ButtonStyled>
                    </a>
                  </div>

                  <div className='rightContent'>
                    <div className='img'>
                      <img src='/static/project/project1.gif' alt='프로젝트1' />
                    </div>
                  </div>
                </Col>
              </Row>
            </TabTopStyled>
          </TabPane>

          <TabPane tabId='2'>
            <TabTopStyled>
              <Row>
                <Col sm='12'>
                  <div className='leftContent'>
                    <div className='project_title'>
                      <div>
                        더 많은 프로젝트는 <br />
                        이력서를 참조해 주세요
                      </div>
                    </div>

                    <a
                      href='https://www.notion.so/jch1223/ChulHee-Jang-8795325bf91b482188e689489f8c70b3'
                      target='_blank'
                    >
                      <ButtonStyled>이력서</ButtonStyled>
                    </a>
                  </div>

                  <div className='rightContent'>
                    <div className='img'>
                      <img src='/static/project/project2.png' alt='서비스2' />
                    </div>
                  </div>
                </Col>
              </Row>
            </TabTopStyled>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const TabTopStyled = styled.div`
  overflow: hidden;
  margin-bottom: 39px;

  .leftContent {
    display: inline-block;
    padding-top: 50px;
    padding-left: 20px;
    width: 49%;
  }
  .project_title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .project_decs {
    margin-bottom: 20px;
    p {
      margin: 0;
      margin-bottom: 5px;
    }
  }

  .rightContent {
    float: right;
    width: 49%;
  }
  .rightContent .img {
    margin-top: 50px;
    img {
      width: 350px;
      display: block;
      margin: auto;
    }
  }

  @media (max-width: 768px) {
    .leftContent {
      padding-top: 20px;
      width: 100%;
    }

    .rightContent {
      float: none;
    }
  }
`;

const NavStyled = styled(Nav)`
  font-size: 30px;
  margin-top: 60px;
  border: 0;
  border-bottom: 3px solid #ededed;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const NavItemStyled = styled(NavItem)`
  width: 16.6666%;
  text-align: center;
  margin-bottom: -3px !important;

  :hover {
    cursor: pointer;
  }
  .active {
    border: 0;
    border-bottom: 3px solid #29adb3 !important;
  }

  a {
    font-size: 20px;
    padding: 19px 0;
  }
  a:hover {
    border: 0;
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: 18px;

    a {
      padding: 5px;
    }
  }
`;

const ButtonStyled = styled(Button)`
  background: #29adb3;
  color: #fff;
  border: 0;
`;
