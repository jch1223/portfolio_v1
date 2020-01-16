import styled from 'styled-components';
import Link from 'next/link';
import Container from '../components/Container';

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
    .serviceTerms {
      margin-bottom: 11px;
    }
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
            <Link href='/privacy'>
              <a>
                <div className='infomationTerms'>개인정보처리방침</div>
              </a>
            </Link>
            <Link href='/terms'>
              <a>
                <div className='serviceTerms'>서비스이용약관</div>
              </a>
            </Link>
            <div className='linkWrap'>
              <a
                href='https://post.naver.com/my.nhn?memberNo=43364200'
                target='_blank'
                className='naver'>
                <img src='/static/footer_post.png' alt='네이버' />
              </a>
              <a
                href='https://www.instagram.com/chabot_official/'
                target='_blank'
                className='insta'>
                <img src='/static/footer_instar.png' alt='인스타' />
              </a>
              <a href='https://pf.kakao.com/_cGHVj' target='_blank' className='kakao'>
                <img src='/static/footer_kakao.png' alt='카카오' />
              </a>
            </div>
          </div>
          <div className='contentLeft'>
            <div className='chabotLogo'>
              <img src='/static/footer_logo.png' alt='' />
            </div>
            <div className='copyright'>&copy;BCN Co.,Ltd.. All Right Reserved.</div>
            <div className='phone'>
              <div>
                <span>고객센터</span> 1800-8765 <span>팩스</span> 02-3394-7773
              </div>
              <div>
                <span>사업자번호</span> 575-87-00451 <span>통신판매업신고</span> 제2017-동대문-215호
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
