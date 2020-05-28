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

const Whoami = (props) => {
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
              <p>타이틀</p>
            </div>
            <ScrollAnimation className='copy1' animateIn='fadeIn' animateOnce={true}>
              <div className='paddingL'>내용</div>
            </ScrollAnimation>
          </Container>
        </div>

        <div className='line'></div>

        <div className='bottom'>
          <Container>내용</Container>
        </div>

        <div className='line'></div>

        <div className='bottom'>
          <Container>내용</Container>
        </div>

        <div className='line'></div>

        <div className='bottom'>
          <Container>내용</Container>
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

export default Whoami;
