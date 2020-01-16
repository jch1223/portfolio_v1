import { useState } from 'react';
import Layout from '../../layout/Layout';
import Container from '../../components/Container';
import ContentTop from '../../components/ContentTop';
import ScrollAnimation from 'react-animate-on-scroll';
import { Table } from 'reactstrap';
import { Container as RsContainer, Row, Col } from 'reactstrap';

import styled from 'styled-components';

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
      margin-bottom: 65px;
      word-break: keep-all;
    }
    .midImg {
      max-width: 1200px;
      height: 350px;
      background: url('/static/brand/3_banner.jpg');
      margin: auto;
      margin-bottom: 50px;
    }
    .content {
      font-size: 20px;
      .title {
        font-size: 30px;
        font-weight: bold;
      }
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
    .month {
      width: 55px;
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
      .midImg {
        background: url('/static/brand/m_3_banner.jpg');
        max-width: 360px;
        height: 430px;
      }
      .copy1 {
        font-size: 16px;
        width: 328px;
        margin-top: 15px;
        margin-bottom: 25px;
      }
      .content {
        font-size: 15px;
        .title {
          font-size: 14px;
        }
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
      .month {
        width: 35px;
        text-align: center;
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
  @media (max-width: 320px) {
    .top {
      .content {
        font-size: 13px;
      }
    }
  }
`;

const Brand = props => {
  const [focus, setFocus] = useState('chabot');
  const [subFocus, setSubFocus] = useState('brand');
  return (
    <Layout
      title={'자동차로 하나되는 세상, 차봇 ㅣ CHABOT brand'}
      focus={focus}
      subFocus={subFocus}
    >
      <ContentTop
        title='Brand'
        url={'/static/brand'}
        img={'3_top_banner.jpg'}
        mImg={'m_3_top_banner.jpg'}
      ></ContentTop>

      <ContentStyled>
        <div className='top'>
          <Container>
            <div className='paddingL'>
              <p>차봇은</p> <p>이런 회사 입니다</p>
            </div>
            <ScrollAnimation className='copy1' animateIn='fadeIn' animateOnce={true}>
              <div className='paddingL'>
                차봇은 기존의 자동차 커뮤니티 채널을 탈피하여 핀테크(인슈어테크), 텔레메틱스, AR,
                VR등을 통해 컨시어지 서비스를 구현하는 자동차 전문 플랫폼입니다.
              </div>
            </ScrollAnimation>
          </Container>
          <div className='midImg'></div>
          <Container>
            <div className='content paddingL'>
              <div className='title'>
                구조를 흔들고 틀을 깨는 차에 대한 새로운 가치
                <br />
                차봇과 같이, 같이의 가치
              </div>
              <br />
              <br />
              자동차 전문가들이 함께 모여
              <br />
              이상적인 자동차 컨설팅 구조를 완성하였습니다.
              <br />
              늘 함께하는 자동차와의 삶을 행복으로 채워드리고자
              <br />
              노력하는 차봇이 되겠습니다.
            </div>
          </Container>
        </div>
        <div className='line'></div>
        <div className='bottom'>
          <Container>
            <h1 className='paddingL20'>차봇이 달려온 길</h1>
            {/* <ScrollAnimation
              className='copy1 paddingL20'
              animateIn='fadeInUp'
              duration={0.5}
              animateOnce={true}> */}
            <Table borderless>
              <tbody>
                <tr>
                  <th className='year'>
                    <p>2019</p>
                  </th>
                  <th className='month'>
                    <p>10</p>
                    <p>05</p>
                    <p>04</p>
                    <p className='lineMargin'>03</p>
                    <p>03</p>
                    <p>03</p>
                  </th>
                  <td className='con'>
                    <p>차봇 B2C 서비스 APP 출시</p>
                    <p>차봇 이노베이션 센터(패스트파이브서울숲점) </p>
                    <p>신용보증기금 투자보증 유치</p>
                    <p>서울모터쇼 {`<차봇>`}브랜드 런칭 참가 및 차봇 KIOSK 첫 시연</p>
                    <p>차봇 VR서비스 런칭</p>
                    <p>차봇 Biz APP 개발</p>
                  </td>
                </tr>
                <tr>
                  <th className='yaer'>
                    <p>2018</p>
                  </th>
                  <th className='month'>
                    <p>12</p>
                    <p>11</p>
                    <p>10</p>
                    <p>04</p>
                  </th>
                  <td className='con'>
                    <p>연매출 20억 보험가입 누적액 200억 돌파</p>
                    <p>차봇 KIOSK 시제품 개발</p>
                    <p>차봇 인하우스 R{`&`}D팀 구성</p>
                    <p>서울 성수동 서울숲으로 본사 이전</p>
                  </td>
                </tr>
                <tr>
                  <th className='yaer'>
                    <p>2017</p>
                  </th>
                  <th className='month'>
                    <p>11</p>
                    <p className='lineMargin'>10</p>
                    <p>02</p>
                  </th>
                  <td className='con'>
                    <p>C/S센터 남양주 지점 오픈 </p>
                    <p>차봇 {`<자동차보험 비교견적 서비스>`} 고도화 서비스</p>
                    <p>매일경제 브랜드 선호도 1위 기업 선정</p>
                  </td>
                </tr>
                <tr>
                  <th className='yaer'>
                    <p>2016</p>
                  </th>
                  <th className='month'>
                    <p>12</p>
                    <p>11</p>
                    <p className='lineMargin'>09</p>
                    <p>09</p>
                  </th>
                  <td className='con'>
                    <p>네이버 포스트 {`<카브리데이>`} 50만뷰 달성</p>
                    <p>다이렉트 자동차보험사 업무 제휴</p>
                    <p>온라인 자동차 판매중개 플랫폼 020서비스 시작 {`<카브리데이>`}</p>
                    <p>BCN(본컨설팅네트웍스) 회사 설립 </p>
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* </ScrollAnimation> */}
          </Container>
        </div>
      </ContentStyled>
    </Layout>
  );
};

export default Brand;
