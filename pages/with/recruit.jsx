import { useState } from 'react';
import Layout from '../../layout/Layout';
import RecruitModal from '../../components/RecruitModal';
import ContentTop from '../../components/ContentTop';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

const SlideContainerStyled = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: auto;
  margin-bottom: 100px;
  .conTitle {
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    padding-top: 90px;
    padding-bottom: 60px;
  }
  @media (max-width: 768px) {
    margin-bottom: 60px;
    .conTitle {
      font-size: 30px;
      margin-left: 10px;
      padding: 40px 0;
      span {
        display: block;
      }
    }
  }
`;

const ContentStyled = styled.div`
  .usImg {
    height: 500px;
    margin-bottom: 125px;
    background: url('/static/hire/5_banner_2.jpg') no-repeat 50% 0;
  }
  .middleTitle {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 60px;
  }
  p {
    margin: 0;
  }

  .row {
    margin-bottom: 20px;
  }
  .title {
    font-size: 35px;
    font-weight: bold;
  }
  .content {
    font-size: 22px;
    p {
      margin-bottom: 10px;
      font-weight: 500;
    }
  }
  @media (max-width: 768px) {
    .usImg {
      height: 432px;
      margin-bottom: 85px;
      background: url('/static/hire/mobile/m_5_banner_2.jpg') no-repeat 50% 0;
    }
    .middleTitle {
      font-size: 19px;
      margin-bottom: 25px;
    }
    .title {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .content {
      font-size: 18px;
    }
  }
`;

const Recruit = props => {
  const [focus, setFocus] = useState('with');
  const [subFocus, setSubFocus] = useState('recruit');
  const [layer, setLayer] = useState(false);
  const [content, setcontent] = useState([]);

  const layerClose = e => {
    setLayer(!layer);
  };

  return (
    <Layout
      title={'자동차로 하나되는 세상, 차봇 ㅣ CHABOT recruit'}
      focus={focus}
      subFocus={subFocus}
    >
      <ContentTop
        title={'Recruit'}
        url={'/static/recruit'}
        img={'5_top_banner.jpg'}
        mImg={'m_5_top_banner.jpg'}
      />

      <SlideContainerStyled>
        <h2 className='conTitle'>
          <span>무한한 가능성의</span> 당신을 기다립니다
        </h2>
      </SlideContainerStyled>

      <ContentStyled>
        <div className='middleTitle'>Learn how we invest in our people</div>
        <div className='usImg'></div>
      </ContentStyled>
      {layer ? (
        <RecruitModal
          layer={layer}
          layerClose={layerClose}
          className={'recruit'}
          content={content}
        />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Recruit;
