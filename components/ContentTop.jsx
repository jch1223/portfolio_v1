import Container from '../components/Container';

import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

const ContentTop = props => {
  const BannerStyled = styled.div`
    height: 172px;
    background: url('${props.url}/${props.img}') no-repeat 50% 0;
    text-align: left;
    .title {
      line-height: 172px;
      text-align: left;
      color: #fff;
      font-weight: bold;
      font-size: 50px;
      display: inline-block;
    }
    .title p {
      margin: 0;
    }
    @media(max-width:768px){
      height: 78px;
      padding-left: 10px;
      background: url('${props.url}/${props.mImg}') no-repeat 50% 0;
      .title{
        line-height: 78px;
        font-size: 35px;
      }
    }
  `;
  return (
    <BannerStyled>
      <Container>
        <ScrollAnimation animateIn='fadeIn' delay={500} offset={100} animateOnce={true}>
          <div className='title'>
            <p>{props.title}</p>
          </div>
        </ScrollAnimation>
      </Container>
    </BannerStyled>
  );
};

export default ContentTop;
