import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import Layout from '../../../layout/Layout';
import ContentTop from '../../../components/ContentTop';
import Container from '../../../components/Container';
import ChabotButton from '../../../components/ChabotButton';
import parse from 'html-react-parser';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

const NoticeContentStyled = styled.div`
  margin-top: 50px;
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .date {
    font-size: 15px;
    color: #676767;
    margin-bottom: 25px;
  }
  .line {
    max-width: 1200px;
    margin: auto;
    height: 1px;
    background-color: #dcdcdc;
    margin-bottom: 80px;
  }
  .content {
    margin-bottom: 40px;
  }
  .button {
    margin-bottom: 80px;
    margin-bottom: 80px;
  }

  @media (max-width: 768px) {
    .paddingL20 {
      padding-left: 20px;
    }
    .title {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .date {
      font-size: 15px;
    }
    .line {
      margin-bottom: 35px;
    }
    .button {
      margin-bottom: 50px;
    }
  }
`;
const ContainerStyled = styled.div`
  padding-right: 20px;
`;

const Notice = props => {
  const [focus, setFocus] = useState('with');
  const [subFocus, setSubFocus] = useState('notice');

  const router = useRouter();
  const { limit } = router.query;
  console.log(limit);

  const clickHandler = () => {
    Router.push(`/with/notice?limit=${limit}`).then(() => window.scrollTo(0, 0));
  };

  return (
    <Layout title={'chabot - notice'} focus={focus} subFocus={subFocus}>
      {console.log('board', props.board)}
      <ContentTop
        title={'Notice'}
        url={'/static/notice'}
        img={'7_top_banner.jpg'}
        mImg={'m_7_top_banner.jpg'}
      ></ContentTop>
      <NoticeContentStyled>
        <Container>
          <ContainerStyled>
            <div className='title paddingL20'>{props.board[0].title}</div>
            <div className='date paddingL20'>{props.board[0].date}</div>
          </ContainerStyled>
          <div className='line'></div>
        </Container>

        <Container>
          <ContainerStyled>
            <div className='content paddingL20'>{parse(props.board[0].content)}</div>
          </ContainerStyled>
          <div className='line'></div>
        </Container>

        <div className='button'>
          <ChabotButton name={`목록`} onClick={clickHandler}></ChabotButton>
        </div>
      </NoticeContentStyled>
    </Layout>
  );
};

Notice.getInitialProps = async function(context) {
  const { id } = context.query;
  console.log(id);
  const res = await fetch(`${API_URL}/api/notice/${id}`);
  const board = await res.json();
  console.log('getboard', board);
  return { board };
};

export default Notice;
