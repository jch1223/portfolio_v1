import Router from 'next/router';
import { useState } from 'react';
import Layout from '../../layout/Layout';
import Container from '../../components/Container';
import ContentTop from '../../components/ContentTop';
import OutArrowSlide from '../../components/OutArrowSlide';
import ChabotButton from '../../components/ChabotButton';

import styled from 'styled-components';

const PeopleStyled = styled.div`
  .header {
    text-align: center;
  }
  .header .title {
    font-size: 30px;
    padding-top: 110px;
    padding-bottom: 40px;
    font-weight: bold;
  }
  .header .content {
    margin: auto;
    font-size: 17px;
    word-break: keep-all;
    padding-bottom: 75px;
  }
  .peopleImg {
    max-width: 1200px;
    height: 500px;
    margin: auto;
    background: url('/static/people/web_people.jpg') no-repeat 50%;
    /* padding-bottom: 165px; */
  }
  .midTitle {
    font-size: 41px;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 74px;
  }

  .bottom {
    text-align: center;
    font-size: 20px;
    color: #252527;
    margin-bottom: 100px;
  }
  button {
    margin: 0;
  }
  .bottom p {
    font-size: 25px;
    margin-bottom: 25px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .paddingL10 {
      padding-left: 20px;
    }
    .header {
      text-align: left;
    }
    .header .title {
      font-size: 28px;
      padding-top: 35px;
      padding-bottom: 20px;
      font-weight: bold;
      span {
        display: block;
      }
    }
    .header .content {
      width: 321px;
      font-size: 12px;
      margin: 0;
      padding-bottom: 63px;
      word-break: keep-all;
    }

    .peopleImg {
      max-width: 360px;
      height: 410px;
      margin: auto;
      background: url('/static/people/mobile/mobile_people.jpg') no-repeat;
    }

    .bottom {
      margin-top: 70px;
      margin-bottom: 100px;
    }
    .bottom p {
      font-size: 19px;
    }
  }
`;

const CardBoxStyled = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-bottom: 75px;
  .card {
    width: 25%;
    border: 0;
    display: inline-block;
    margin-bottom: 70px;
  }

  /* .first,
  .fifth,
  .ninth {
    padding-left: 5%;
  }

  .fourth,
  .eighth {
    width: 20%;
  } */

  .cardWrap {
    margin: auto;
    width: 239px;
  }
  .number {
    font-size: 40px;
    color: #29adb3;
  }
  .title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .subtitle {
    font-size: 20px;
  }
  .decs {
    font-size: 12.9px;
    color: #252527;
  }

  @media (max-width: 980px) {
    .card {
      width: 33.3333%;
    }
  }
  @media (max-width: 768px) {
    .card {
      width: 100%;
      margin-bottom: 0px;
    }
    .cardWrap {
      width: 100%;
      overflow: hidden;
    }
    .number {
      text-align: center;
      width: 50px;
      height: 70px;
      float: left;
      font-size: 50px;
      letter-spacing: -6px;
      margin-right: 10px;
    }
    .title {
      float: left;
      margin: 0;
      font-size: 21px;
      margin-top: 14px;
    }
    .subtitle {
      float: left;
      height: 48px;
      font-size: 13px;
      padding-top: 23px;
      padding-left: 7px;
    }
    .decs {
      float: left;
      font-size: 14px;
      width: 81%;
    }
  }
`;

const CardBox = props => {
  return (
    <div className={`card ${props.nth}`}>
      <div className='cardWrap'>
        <div className='number'>{props.number}</div>
        <div className='title'>{props.title}</div>
        <div className='subtitle'>{props.subtitle}</div>
        <div className='decs'>{props.decs}</div>
      </div>
    </div>
  );
};

const People = props => {
  const [focus, setFocus] = useState('chabot');
  const [subFocus, setSubFocus] = useState('people');

  const goToRecruit = () => {
    Router.push('/with/recruit').then(() => window.scrollTo(0, 0));
  };

  return (
    <Layout
      title={'자동차로 하나되는 세상, 차봇 ㅣ CHABOT people'}
      focus={focus}
      subFocus={subFocus}
    >
      <ContentTop
        title='People'
        url={'/static/people'}
        img={'4_top_banner.jpg'}
        mImg={'m_4_top_banner.jpg'}
      ></ContentTop>

      <PeopleStyled>
        <Container>
          <div style={{ display: 'none' }} className='header'>
            <div className='title paddingL10'>
              {' '}
              <span>차봇은 </span>이런 사람들과 일합니다
            </div>
            <div className='content paddingL10'>
              자동차 전문 분야를 통해 자동차 라이프 스타일을 완성시키며
              <br /> 새로운 자동차 문화를 함께 만들어가고 있습니다.
            </div>
          </div>
        </Container>
        {/* <div className='peopleImg'></div> */}
        <Container>
          <div className='header paddingL10'>
            <div style={{ paddingTop: '40px' }} className='title'>
              <span>우리는</span> 이런 사람들입니다
            </div>
            <div className='content'>
              차봇의 기업문화, 그 중심에는 올바른 ‘사람’이 있습니다. <br />
              차봇 피플은 자동차 문화를 만드는것의 가치를 중요하게 생각합니다.
            </div>
          </div>
        </Container>
        <CardBoxStyled>
          <Container>
            <CardBox
              nth={'first'}
              number={1}
              title={'HONORABLE'}
              subtitle={'고귀한 성품을 가진'}
              decs={'큰소리는 산에 올라가서 지르자'}
            ></CardBox>
            <CardBox
              nth={'second'}
              number={2}
              title={'CONFIDENCE'}
              subtitle={'고객의 신뢰를 얻는'}
              decs={'고객으로부터 감탄사가 나오게 하자'}
            ></CardBox>
            <CardBox
              nth={'third'}
              number={3}
              title={'CONSIDERATION'}
              subtitle={'상처를 주지 않는'}
              decs={'없어지지 않는 흔적은 남기지 말자'}
            ></CardBox>
            <CardBox
              nth={'fourth'}
              number={4}
              title={'HUMANENESS'}
              subtitle={'인정을 베푸는'}
              decs={'옆 사람의 휴지통을 체크하자'}
            ></CardBox>
            <CardBox
              nth={'fifth'}
              number={5}
              title={'TOGETHER'}
              subtitle={'다함께 뛰는'}
              decs={'경쟁은 상대가 있어야 가능하다'}
            ></CardBox>
            <CardBox
              nth={'sixth'}
              number={6}
              title={'PROFIT'}
              subtitle={'이윤을 창출하는'}
              decs={'회사가 살아야 우리 가족이 산다'}
            ></CardBox>
            <CardBox
              nth={'seventh'}
              number={7}
              title={'ROLE'}
              subtitle={'이끌거나 따르거나 떠나거나'}
              decs={'답이 없는 불만을 품었다면 회사를 떠나자'}
            ></CardBox>
            <CardBox
              nth={'eighth'}
              number={8}
              title={'FAMILY'}
              subtitle={'가족의 칭찬과 인정을 받는'}
              decs={'가족은 회사를 다니는 첫째 이유다 '}
            ></CardBox>
            <CardBox
              nth={'ninth'}
              number={9}
              title={'TRUTH'}
              subtitle={'투명한'}
              decs={'진실은 반드시 밝혀진다'}
            ></CardBox>
            <CardBox
              nth={'tenth'}
              number={10}
              title={'PURPOSE'}
              subtitle={'높은 목적을 가진'}
              decs={'A company that works with God’s heart'}
            ></CardBox>
          </Container>
        </CardBoxStyled>

        <div className='bottom'>
          <p>차봇피플이 되고 싶다면?</p>
          <ChabotButton name='탑승하기' onClick={goToRecruit}></ChabotButton>
        </div>
      </PeopleStyled>
    </Layout>
  );
};

export default People;
