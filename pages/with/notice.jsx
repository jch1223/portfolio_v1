import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import ContentTop from '../../components/ContentTop';
import NoticeBoard from '../../components/NoticeBoard';
import ChabotButton from '../../components/ChabotButton';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { API_URL } from '../../config/config';

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
      subFocus={subFocus}>
      <ContentTop
        title={'Notice'}
        url={'/static/notice'}
        img={'7_top_banner.jpg'}
        mImg={'m_7_top_banner.jpg'}
      />

      <Container>
        <PaddingR>
          <ReviewStyled>
            <NoticeBoard items={props.items} limit={props.limit} />
            {props.cnt[0].cnt >= 10 && props.cnt[0].cnt > props.limit ? (
              <div className='buttonWrap'>
                <ChabotButton
                  name='더보기'
                  onClick={() =>
                    Router.push(`/with/notice?limit=${props.limit + 10}`)
                  }></ChabotButton>
              </div>
            ) : (
              <div className='buttonWrap'></div>
            )}
          </ReviewStyled>
        </PaddingR>
      </Container>
    </Layout>
  );
};

Notice.getInitialProps = async function({ query: { limit = 10 } }) {
  const resItems = await fetch(`${API_URL}/api/notice?limit=${limit}`);
  const items = await resItems.json();

  // console.log('cnt', items.cnt[0].cnt);
  // console.log({ ...items, limit: parseInt(limit, 10) });
  return { ...items, limit: parseInt(limit, 10) };
};

export default Notice;
