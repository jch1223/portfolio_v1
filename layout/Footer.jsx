import styled from 'styled-components';
import Container from '../components/Container';

import config from '../config/config';

const FooterStyled = styled.div`
  height: 290px;
  color: #909090;
  background: #282828;

  .footerContent {
    overflow: hidden;
    padding-top: 90px;
  }

  .chabotLogo {
    width: 156px;
    margin-bottom: 15px;
  }
  .chabotLogo img {
    display: block;
    width: 100%;
  }

  .contentLeft {
    float: left;
    .copyright {
      font-size: 13px;
      margin-bottom: 3px;
      font-weight: 100;
    }
    .phone {
      font-size: 13px;
    }
    .phone span {
      font-weight: bold;
    }
  }
  .contentRight {
    float: right;
    font-size: 15px;
    font-weight: bold;
    text-align: right;
    a {
      color: #909090;
    }
    .linkWrap a {
      margin-left: 16px;
    }
    .linkWrap img {
      width: 55px;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    padding-left: 10px;
    .footerContent {
      padding: 53px 0;
    }
    .contentRight {
      float: none;
      font-size: 15px;
      width: 100%;
      text-align: left;
      margin-top: 0;
      margin-bottom: 21px;

      .linkWrap a {
        margin-left: 0;
        margin-right: 10px;
      }
      .linkWrap img {
        width: 30px;
      }
    }
    .contentLeft {
      float: none;
      .chabotLogo {
        margin-bottom: 18px;
      }
      .chabotLogo img {
        width: 120px;
      }
      .copyright {
        font-size: 11px;
        margin-bottom: 0;
      }
      .phone {
        font-size: 11px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div className='footerContent'>
          <div className='contentRight'>
            <div className='linkWrap'>
              <a
                href='https://post.naver.com/my.nhn?memberNo=43364200'
                target='_blank'
                className='naver'
              >
                <img src='/static/footer_post.png' alt='네이버' />
              </a>
              <a
                href='https://www.instagram.com/chabot_official/'
                target='_blank'
                className='insta'
              >
                <img src='/static/footer_instar.png' alt='인스타' />
              </a>
              <a href='https://pf.kakao.com/_cGHVj' target='_blank' className='kakao'>
                <img src='/static/footer_kakao.png' alt='카카오' />
              </a>
            </div>
          </div>
          <div className='contentLeft'>
            <div className='chabotLogo'>
              <img src='/static/logo/logo.png' alt='' />
            </div>
            <div className='copyright'>&copy;JangChulHee Co.,Ltd.. All Right Reserved.</div>
            <div className='phone'>
              <div>
                <span>Phone</span> 010-6221-7344
              </div>
              <div>
                <span>E-mail</span> ico1828@gmail.com
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
