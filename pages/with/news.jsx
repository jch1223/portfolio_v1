import { useState, useEffect } from 'react';
import Router from 'next/router';
import Layout from '../../components/Layout';
import ContentTop from '../../components/ContentTop';
import Container from '../../components/Container';
import ChabotButton from '../../components/ChabotButton';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { API_URL } from '../../config/config';

const NewsStyled = styled.div`
  .top:hover {
    cursor: pointer;
  }

  .top {
    height: 438px;
    margin-bottom: 40px;
    background: #f3f3f3;
    .topWrap {
      max-width: 1200px;
      margin: auto;
    }

    .left {
      float: left;
      width: 40%;
      height: 438px;
      padding: 40px 30px;
      .img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }

    .right {
      float: left;
      width: 60%;
      padding-top: 40px;
      .title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 12px;
        margin-top: 12px;
      }
      .content {
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 12; /* 라인수 */
        -webkit-box-orient: vertical;
        word-wrap: keep-all;
        height: 285px;
        line-height: 1.6em;
      }
    }
  }

  .newsContent {
    margin-bottom: 17px;
    transition: all 0.5s ease;
    .company,
    .date {
      display: inline-block;
      color: #656565;
    }
    .company {
      font-size: 17px;
      margin-right: 13px;
    }
    .date {
      font-size: 12px;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .newsContent:hover {
    cursor: pointer;
  }
  .buttonWrap {
    margin-top: 30px;
    margin-bottom: 110px;
  }
  @media (max-width: 768px) {
    .paddingL20 {
      padding-left: 20px;
    }
    .top {
      margin-bottom: 30px;
    }
    .top .left {
      float: none;
      width: 100%;
      height: 210px;
      padding: 0;
      .img {
        /* width: 420px; */
      }
    }
    .top .right {
      float: none;
      width: 100%;
      padding: 10px 10px;

      .title {
        font-size: 20px;
      }
      .content {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* 라인수 */
        -webkit-box-orient: vertical;
        word-wrap: keep-all;
        height: 128px;
        line-height: 1.6em;
      }
    }
    .newsContent {
      .company {
        font-size: 20px;
      }
      .date {
        font-size: 13px;
      }
      .title {
        font-size: 16px;
      }
    }
    .buttonWrap {
      margin-top: 38px;
      margin-bottom: 65px;
    }
  }
`;

const ImgStyled = styled.div`
  background: url(${props => props.src}) no-repeat 50%;
  margin: auto;
  max-width: 420px;
  height: 100%;
  background-size: cover;
`;

const NewsContent = props => {
  const urlHandler = () => {
    window.open(props.newsUrl, 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
  };
  return (
    <div className='newsContent' onClick={urlHandler}>
      <div className='header'>
        <div className='company'>{props.company} </div>
        <div className='date'>{props.date}</div>
      </div>
      <div className='title'>{props.title}</div>
    </div>
  );
};

const News = props => {
  const [focus, setFocus] = useState('with');
  const [subFocus, setSubFocus] = useState('news');
  const [topItem, setTopItem] = useState('news');

  useEffect(() => {
    setTopItem(props.items[0]);
    console.log(topItem);
  }, [topItem]);

  const urlHandler = () => {
    window.open(
      topItem.newsUrl,
      'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes'
    );
  };

  return (
    <Layout
      title={'자동차로 하나되는 세상, 차봇 ㅣ CHABOT press'}
      focus={focus}
      subFocus={subFocus}>
      <ContentTop
        title={'Press'}
        url={'/static/press'}
        img={'6_top_banner.jpg'}
        mImg={'m_6_top_banner.jpg'}
      />
      <NewsStyled>
        <div className='top' onClick={urlHandler}>
          <div className='topWrap'>
            <div className='left'>
              <div className='img'>
                <ImgStyled src={topItem.imgUrl}></ImgStyled>
              </div>
            </div>
            <Container>
              <div className='right paddingL20'>
                <h1 className='title'>{topItem.title}</h1>
                <div className='content'>{topItem.content}</div>
              </div>
            </Container>
          </div>
        </div>
        <Container>
          <div className='paddingL20'>
            {props.items.map((item, index) => {
              if (item.isDeleted === 'N' && index !== 0) {
                return (
                  <NewsContent
                    key={item.index}
                    company={item.company}
                    date={item.createdAt}
                    title={item.title}
                    newsUrl={item.newsUrl}
                  />
                );
              }
            })}
          </div>
        </Container>
        {props.cnt[0].cnt > 6 && props.cnt[0].cnt > props.limit ? (
          <div className='buttonWrap'>
            <ChabotButton
              name='더보기'
              onClick={() => Router.push(`/with/news?limit=${props.limit + 5}`)}></ChabotButton>
          </div>
        ) : (
          <div className='buttonWrap'></div>
        )}
      </NewsStyled>
    </Layout>
  );
};

News.getInitialProps = async function({ query: { limit = 6 } }) {
  const res = await fetch(`${API_URL}/api/press?limit=${limit}`);
  const items = await res.json();

  console.log(items);

  return { ...items, limit: parseInt(limit, 10) };
};

export default News;
