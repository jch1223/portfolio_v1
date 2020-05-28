import { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import dynamic from 'next/dynamic';
import Container from '../components/Container';

import config from '../config/config';

const SkillSlide = dynamic(() => import('../components/SkillSlide'), { ssr: false });

const Index = () => {
  const [focus, setFocus] = useState('index');
  const size = useWindowSize();

  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
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
    }, []);

    return windowSize;
  }

  return (
    <Layout focus={focus}>
      <MainBannerStyled>
        <ScrollAnimation className='mainBanner' animateIn='fadeIn' animateOnce={true}>
          <Container>
            <div className='mainCopy'>
              <ScrollAnimation className='copy1' animateIn='fadeInUp' animateOnce={true}>
                <div id='copy1'> FRONT-END</div>
              </ScrollAnimation>
              <ScrollAnimation
                className='copy2'
                animateIn='fadeInUp'
                delay={500}
                animateOnce={true}
              >
                <div id='copy2'> 타이틀</div>
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
                <div>타이틀</div>
              </ScrollAnimation>
              <ScrollAnimation
                className='copy2'
                offset={0}
                animateIn='fadeInUp'
                delay={400}
                animateOnce={true}
              >
                <div>타이틀</div>
              </ScrollAnimation>
              <ScrollAnimation
                className='copy3'
                offset={0}
                animateIn='fadeInUp'
                delay={800}
                animateOnce={true}
              >
                <div>내용</div>
              </ScrollAnimation>
              <ScrollAnimation offset={0} animateIn='fadeInUp' delay={1000} animateOnce={true}>
                <div style={{ marginBottom: '10px' }}>부재</div>

                <div>
                  <Link href='/intro/whoami'>
                    <IndexButton>소개</IndexButton>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </Container>
        </ScrollAnimation>
      </SecBannerStyled>

      <ThrBannerStyled>
        <Container>
          <div className='leftContent'>
            <div className='img'></div>
          </div>
          <div className='rightContent'>
            <div className='brandInfo'>
              <ScrollAnimation offset={0} animateIn='fadeInUp' delay={400} animateOnce={true}>
                <h1>타이틀</h1>
              </ScrollAnimation>
              <ScrollAnimation offset={0} animateIn='fadeInUp' delay={800} animateOnce={true}>
                <div className='desc'>내용</div>
              </ScrollAnimation>
              <ScrollAnimation offset={0} animateIn='fadeInUp' delay={1200} animateOnce={true}>
                <Link href='/intro/project'>
                  <IndexButton> 프로젝트</IndexButton>
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </Container>
      </ThrBannerStyled>

      <Container>
        <SkillTitle className='skill_title'>
          <h2>SKILL</h2>
        </SkillTitle>
      </Container>
      <SkillSlide></SkillSlide>
    </Layout>
  );
};

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
  text-align: right;

  .mainBanner {
    width: 100%;
    height: 600px;
    margin-top: 300px;
    background: url('/static/index/main_banner_1.jpg') no-repeat 50% 0;
  }
  .mainCopy {
    float: right;
    margin-top: -100px;
    font-size: 70px;
  }
  .copy2 {
    color: white;
    font-weight: bold;
  }

  .slide {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .mainBanner {
      width: 100%;
      margin-top: 180px;
      height: 260px;
      background-color: #e2e2e2;
      background: url('/static/index/mobile/main_banner_1.jpg') 50% 0;
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
    background: url('/static/index/main_banner_2.jpg') no-repeat 50% 0;
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
    .secondBanner {
      height: 516px;
      background: url('/static/index/mobile/main_banner_2.jpg') no-repeat 50% 0;
    }
    .secondCopy {
      padding-top: 130px;
    }
    .secondCopy .copy1 {
      font-weight: 200;
      font-size: 18px;
    }
    .secondCopy .copy2 {
      font-size: 40px;
      margin-bottom: 10px;
    }
    .secondCopy .copy3 {
      font-size: 15px;
      width: 280px;
      margin-bottom: 50px;
    }
  }
`;

const ThrBannerStyled = styled.div`
  overflow: hidden;
  margin-bottom: 50px;
  .leftContent {
    display: inline-block;
    width: 49%;
  }
  .rightContent {
    float: right;
    padding-top: 230px;
    width: 40%;
  }
  .leftContent .img {
    height: 696px;
    margin-top: 110px;
    background: url('/static/index/main_banner_3.jpg') no-repeat 25%;
  }
  .brandInfo h3 {
    font-size: 35px;
    font-weight: bold;
  }
  .brandInfo h1 {
    font-size: 77px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 40px;
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
      margin-top: 0;
      background: url('/static/index/mobile/main_banner_3.jpg') no-repeat 20%;
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

export default Index;
