import { useState } from 'react';
import Layout from '../../layout/Layout';
import Container from '../../components/Container';
import ContentTop from '../../components/ContentTop';
import ScrollAnimation from 'react-animate-on-scroll';
import { Table } from 'reactstrap';

import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-logos/redux';
import reactIcon from '@iconify/icons-logos/react';
import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import javascriptIcon from '@iconify/icons-logos/javascript';
import nextjsIcon from '@iconify/icons-logos/nextjs';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import expressIcon from '@iconify/icons-logos/express';
import gitIcon from '@iconify/icons-logos/git';
import awsIcon from '@iconify/icons-logos/aws';
import notionIcon from '@iconify/icons-cib/notion';
import slackIcon from '@iconify/icons-logos/slack-icon';
import mysqlIcon from '@iconify/icons-logos/mysql';

import styled from 'styled-components';

const Whoami = props => {
  const [focus, setFocus] = useState('intro');
  const [subFocus, setSubFocus] = useState('whoami');
  return (
    <Layout focus={focus} subFocus={subFocus}>
      <ContentTop
        title='Who am I'
        url={'/static'}
        img={'top_banner.jpg'}
        mImg={'top_banner.jpg'}
      ></ContentTop>

      <ContentStyled>
        <div className='top'>
          <Container>
            <div className='paddingL'>
              <p>저는</p> <p>이런 사람 입니다</p>
            </div>
            <ScrollAnimation className='copy1' animateIn='fadeIn' animateOnce={true}>
              <div className='paddingL'>
                일을 하면서 항상 재미를 느끼지는 않으나 <br />
                무언가를 생성해 내고 스스로가 발전하고 있다는 성취감에 <br />
                개발자라는 직업에 매력을 느낍니다
                <br />
                <br /> 성장하는 개발자가 되기 위해 블로그와 TIL을 작성하고 있습니다.
                <br /> 기술을 학습 할 때 해당 기술의 docs를 중점으로 학습합니다.
                <br />
                에러 핸들링은 stackover flow와 해당 기술의 github issue페이지를 참고합니다.
              </div>
            </ScrollAnimation>
          </Container>
        </div>

        <div className='line'></div>

        <div className='bottom'>
          <Container>
            <h1 className='paddingL20'>SKILL</h1>

            <div className='skill_box'>
              <div className='title'> FRONT-END</div>
              <div>
                <Icon style={{ margin: '10px' }} width='40' icon={html5} />
                <Icon style={{ margin: '10px' }} width='40' icon={css3} />
                <Icon style={{ margin: '10px' }} width='50' icon={javascriptIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={reactIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={reduxIcon} />
              </div>
            </div>

            <div className='skill_box'>
              <div className='title'> BACK-END</div>
              <div>
                <Icon style={{ margin: '10px' }} width='40' icon={nodejsIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={expressIcon} />
                <Icon style={{ margin: '10px' }} width='40' icon={nextjsIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={mysqlIcon} />
              </div>
            </div>

            <div className='skill_box'>
              <div className='title'> DEV TOOLS</div>
              <div>
                <Icon style={{ margin: '10px' }} width='40' icon={gitIcon} />
                <Icon style={{ margin: '10px' }} width='40' icon={awsIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={notionIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={slackIcon} />
              </div>
            </div>
          </Container>
        </div>

        <div className='line'></div>

        <div className='bottom'>
          <Container>
            <h1 className='paddingL20'>개발 경력</h1>
            <Table borderless>
              <tbody>
                <tr>
                  <th className='year'>
                    <p>19.06 - 19.12</p>
                  </th>
                  <td className='con'>
                    <p>본컨설팅 네트웍스</p>
                    <p style={{ fontSize: '15px', fontWeight: 'normal' }}>프론트엔드 웹 개발자 </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>

        <div className='line'></div>

        <div className='bottom'>
          <Container>
            <h1 className='paddingL20'>Education</h1>
            <Table borderless>
              <tbody>
                <tr>
                  <th className='year'>
                    <p>18.11 - 18.05</p>
                  </th>
                  <td className='con'>
                    <p>코드스테이츠</p>
                    <p style={{ fontSize: '15px', fontWeight: 'normal' }}>
                      Advanced Software Engineering, Immersive Program
                    </p>
                  </td>
                </tr>

                <tr>
                  <th className='year'>
                    <p>18.05 - 18.10</p>
                  </th>
                  <td className='con'>
                    <p>엠아이티 능력개발원</p>
                    <p style={{ fontSize: '15px', fontWeight: 'normal' }}>
                      JAVA 국비지원 과정 수료
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      </ContentStyled>
    </Layout>
  );
};

const ContentStyled = styled.div`
  .top {
    padding: 95px 0;
    p {
      display: inline-block;
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 20px;
    }
    .copy1 {
      font-size: 20px;
      width: 680px;
      word-break: keep-all;
    }
  }

  .line {
    height: 1px;
    background-color: #dcdcdc;
  }

  .bottom {
    padding: 80px 0;
    .year {
      width: 140px;
    }
    .skill_box {
      margin-bottom: 20px;
      .title {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
    h1 {
      font-size: 30px;
      margin-bottom: 60px;
      font-weight: bold;
    }
    tr p {
      margin: 5px;
    }
    th {
      font-weight: bold;
      font-size: 17px;
    }
    td {
      font-weight: bold;
      font-size: 17px;
    }
  }
  @media (max-width: 768px) {
    .paddingL {
      padding-left: 30px;
    }
    .paddingL20 {
      padding-left: 20px;
    }
    .top {
      padding: 36px 0;
      border-bottom: 0;
      p {
        font-size: 30px;
        margin: 0;
        display: block;
      }
      .copy1 {
        font-size: 16px;
        width: 328px;
        margin-top: 15px;
      }
    }
    .line {
      display: none;
    }
    .bottom {
      padding: 15px 0;
      .lineMargin {
        margin-bottom: 23px;
      }
      .year {
        width: 35px;
      }
      h1 {
        font-size: 30px;
        margin-bottom: 24px;
      }
      th {
        padding: 0;
        font-size: 13px;
      }
      td {
        padding: 0;
        font-size: 13px;
      }
    }
  }
`;

const SkillTitle = styled.div`
  padding-left: 20px;
  h2 {
    font-size: 28px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    h2 {
      font-size: 20px;
    }
  }
`;

export default Whoami;
