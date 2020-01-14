import React, { useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
import Container from '../../components/Container';
import ContentTop from '../../components/ContentTop';
import styled from 'styled-components';

const ReviewStyled = styled.div`
  margin-top: 30px;
  font-size: 17px;
  .row {
    margin-bottom: 17px;
  }
  p {
    margin-top: 80px;
    font-size: 42px;
    font-weight: bold;
  }
  .buttonWrap {
    margin-top: 85px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    .buttonWrap {
      margin-top: 35px;
      margin-bottom: 65px;
    }
  }
`;

const PaddingR = styled.div`
  padding-right: 20px;
`;

const Notice = props => {
  const [focus, setFocus] = useState('with');
  const [subFocus, setSubFocus] = useState('notice');
  console.log(props.limit);
  return (
    <Layout
      title={'자동차로 하나되는 세상, 차봇 ㅣ CHABOT notice'}
      focus={focus}
      subFocus={subFocus}
    >
      <ContentTop
        title={'Notice'}
        url={'/static/notice'}
        img={'7_top_banner.jpg'}
        mImg={'m_7_top_banner.jpg'}
      />

      <Container>
        <PaddingR>
          <ReviewStyled></ReviewStyled>
        </PaddingR>
      </Container>
    </Layout>
  );
};

export default Notice;
