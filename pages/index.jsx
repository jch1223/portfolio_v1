import { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import AppButton from '../components/AppButton';
import ScrollTop from '../components/ScrollTop';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import dynamic from 'next/dynamic';

import Container from '../components/Container';

const ReviewSlide = dynamic(() => import('../components/ReviewSlide'), { ssr: false });

const IndexButton = styled(Button)`
  width: 185px;
  height: 48px;
  font-size: 23px;
  font-weight: bold;
  background: #29adb3;
  color: #fff;
  border-radius: 30px;
  border: 0;
  @media (max-width: 768px) {
    width: 148px;
    height: 38px;
    line-height: 26px;
    font-size: 20px;
  }
`;

const MainBannerStyled = styled.div`
  .mainBanner {
    width: 100%;
    height: 600px;
    margin-top: 300px;
    background: url('/static/index/main_banner.jpg') no-repeat 50% 0;
  }
  .mainCopy {
    float: right;
    margin-top: -100px;
    font-size: 70px;
  }
  .copy2 {
    color: white;
    font-weight: bold;
    /* text-shadow: 2px 2px 6px black; */
  }
  #copy2 {
    text-align: right;
  }

  .slide {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .mainBanner {
      width: 100%;
      margin-top: 180px;
      margin-bottom: 85px;
      height: 260px;
      background-color: #e2e2e2;
      /* no-repeat 제거 -> 이미지 크기가 확정이 안나서 일단 가안으로 확인 하기 위해 */
      background: url('/static/index/m_main_banner.jpg') 50% 0;
    }
    .mainCopy {
      float: left;
      font-size: 38px;
      padding-left: 20px;
      margin-top: -52px;
    }
  }
`;
const SecBannerStyled = styled.div`
  .secondBanner {
    height: 973px;
    background: url('/static/index/web_mainbanner2.jpg') no-repeat 50% 0;
  }
  .secondCopy {
    padding-top: 244px;
    padding-left: 20px;
  }
  .secondCopy .copy1 {
    font-size: 35px;
    font-weight: bold;
  }
  .secondCopy .copy2 {
    font-size: 77px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .secondCopy .copy3 {
    width: 360px;
    font-size: 22px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    .secondCopy {
      padding-top: 400px;
    }
    .secondBanner {
      height: 700px;
      background: url('/static/index/mobile/m_2.png') no-repeat 50%;
    }
    .secondCopy .copy1 {
      font-weight: 200;
      margin-bottom: 0px;
      font-size: 22px;
    }
    .secondCopy .copy2 {
      font-size: 47px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .secondCopy .copy3 {
      font-size: 17px;
      width: 280px;
      margin-bottom: 20px;
    }
  }
`;

const BrandStyled = styled.div`
  overflow: hidden;
  margin-bottom: 160px;
  .leftContent {
    display: inline-block;

    width: 49%;
  }
  .rightContent {
    float: right;
    padding-top: 245px;
    width: 40%;
  }
  .leftContent .img {
    height: 696px;
    margin-top: 110px;
    background: url('/static/index/web_mobileapp.png') no-repeat 50%;
  }
  .brandInfo h3 {
    font-size: 35px;
    font-weight: bold;
  }
  .brandInfo h1 {
    font-size: 77px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 80px;
  }
  .desc {
    max-width: 369px;
    font-size: 22px;
    word-break: keep-all;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    margin-bottom: 60px;
    .leftContent {
      width: 100%;
    }
    .leftContent .img {
      height: 320px;
      margin-top: 30px;
      margin-left: -42px;
      background: url('/static/index/mobile/3.jpg') no-repeat 50%;
    }
    .rightContent {
      float: none;
      padding-left: 20px;
      padding-top: 50px;
      width: 100%;
    }
    .brandInfo h3 {
      font-size: 22px;
      font-weight: 200;
    }
    .brandInfo h1 {
      font-size: 47px;
      font-weight: bold;
      margin-top: 0px;
      margin-bottom: 20px;
    }
    .desc {
      max-width: 320px;
      font-size: 17px;
      word-break: keep-all;
      margin-bottom: 30px;
    }
  }
`;

const ReviewTitle = styled.div`
  padding-left: 175px;
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

const Index = () => {
  const [focus, setFocus] = useState('index');
  const size = useWindowSize();

  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined
      };
    }
    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }

  return (
    <Layout focus={focus}>
      {/* <AppButton></AppButton> */}
      <MainBannerStyled>
        <ScrollAnimation className='mainBanner' animateIn='fadeIn' animateOnce={true}>
          <Container>
            <div className='mainCopy'>
              <ScrollAnimation className='copy1' animateIn='fadeInUp' animateOnce={true}>
                <div id='copy1'> FRONTEND DEVELOPER</div>
              </ScrollAnimation>
              <ScrollAnimation
                className='copy2'
                animateIn='fadeInUp'
                delay={500}
                animateOnce={true}
              >
                <div id='copy2'>JANG CHUL HEE</div>
              </ScrollAnimation>
            </div>
          </Container>
        </ScrollAnimation>
      </MainBannerStyled>

      <SecBannerStyled>
        <ScrollAnimation
          className='secondBanner'
          offset={500}
          animateIn='fadeIn'
          animateOnce={true}
        >
          <Container>
            <div className='secondCopy'>
              <ScrollAnimation className='copy1' offset={0} animateIn='fadeInUp' animateOnce={true}>
                <div>
                  FRONTEND DEVELOPER <br></br> JANG CHUL HEE
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                className='copy2'
                offset={0}
                animateIn='fadeInUp'
                delay={400}
                animateOnce={true}
              >
                <div>CHABOT</div>
              </ScrollAnimation>
              <ScrollAnimation
                className='copy3'
                offset={0}
                animateIn='fadeInUp'
                delay={800}
                animateOnce={true}
              >
                <div>
                  차봇은 자동차 관리, 금융, 보험 등 <br />
                  모든 자동차 서비스를 하나로 묶는
                  <br /> 자동차 컨시어지 플랫폼입니다
                </div>
              </ScrollAnimation>
              <ScrollAnimation offset={0} animateIn='fadeInUp' delay={1000} animateOnce={true}>
                <Link href='/chabot/service'>
                  <IndexButton>차봇 소개</IndexButton>
                </Link>
              </ScrollAnimation>
            </div>
          </Container>
        </ScrollAnimation>
      </SecBannerStyled>

      <BrandStyled>
        <Container>
          <div className='leftContent'>
            <div className='img'></div>
          </div>
          <div className='rightContent'>
            <div className='brandInfo'>
              <ScrollAnimation offset={0} animateIn='fadeInUp' animateOnce={true}>
                <h3>자동차로 하나되는 세상</h3>
                <h3>모빌리티 메가 트렌드의 중심</h3>
              </ScrollAnimation>
              <ScrollAnimation offset={0} animateIn='fadeInUp' delay={400} animateOnce={true}>
                <h1>CHABOT</h1>
              </ScrollAnimation>
              <ScrollAnimation offset={0} animateIn='fadeInUp' delay={800} animateOnce={true}>
                <div className='desc'>
                  차봇은 자동차와 함께 만들어가는 일상을 공유하여 모든 사람과 연결해주는 자동차
                  글로벌 커뮤니티의 시작입니다{' '}
                </div>
              </ScrollAnimation>
              <ScrollAnimation offset={0} animateIn='fadeInUp' delay={1200} animateOnce={true}>
                <Link href='/chabot/brand'>
                  <IndexButton> 브랜드 소개</IndexButton>
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </Container>
      </BrandStyled>

      <Container>
        <ReviewTitle className='reviewTitle'>
          <h2>사용자 후기</h2>
        </ReviewTitle>
      </Container>
      <ReviewSlide></ReviewSlide>
    </Layout>
  );
};

export default Index;
