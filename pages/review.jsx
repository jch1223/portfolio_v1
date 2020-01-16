import Layout from '../layout/Layout';
import Container from '../components/Container';
import UserReview from '../components/UserReview';
import ChabotButton from '../components/ChabotButton';
import ScrollAnimation from 'react-animate-on-scroll';

import styled from 'styled-components';

const BannerStyled = styled.div`
  width: 100%;
  height: 171px;
  background: url('/static/index/2_top_banner.jpg') no-repeat 50% 0;
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 84px;
    padding: 22px 0;
  }
`;

const ReviewStyled = styled.div`
  font-size: 30px;
  p {
    margin-top: 80px;
    font-size: 42px;
    font-weight: bold;
  }
`;

const Review = () => {
  return (
    <Layout>
      <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <BannerStyled>
          <Container>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
              <div className='title'>User Voice</div>
            </ScrollAnimation>
          </Container>
        </BannerStyled>
      </ScrollAnimation>

      <Container>
        <ReviewStyled>
          <p>차봇은 이런 서비스를 합니다</p>
          <UserReview></UserReview>
          <ChabotButton name='더보기'></ChabotButton>
        </ReviewStyled>
      </Container>
    </Layout>
  );
};
export default Review;
