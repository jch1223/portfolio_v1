import styled from 'styled-components';
import Container from '../components/Container';
import { Icon, InlineIcon } from '@iconify/react';
import welcomeWriteBlog from '@iconify/icons-dashicons/welcome-write-blog';
import githubFilled from '@iconify/icons-ant-design/github-filled';

import config from '../config/config';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div className='footerContent'>
          <div className='contentRight'>
            <div className='linkWrap'>
              {config.blog && (
                <a href={config.blog} target='_blank' className='blog'>
                  <Icon width='50' icon={welcomeWriteBlog} />
                </a>
              )}

              {config.github && (
                <a href={config.github} target='_blank' className='github'>
                  <Icon width='50' icon={githubFilled} />
                </a>
              )}
            </div>
          </div>

          <div className='contentLeft'>
            <div className='footer_logo'>
              <img src='/static/logo/logo.png' alt='' />
            </div>
            <div className='copyright'>&copy;JangChulHee Co.,Ltd.. All Right Reserved.</div>
            <div className='phone'>
              <div>
                <span>Phone</span> {config.phone}
              </div>
              <div>
                <span>E-mail</span> {config.email}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  height: 290px;
  color: #909090;
  background: #282828;

  .footerContent {
    overflow: hidden;
    padding-top: 90px;
  }

  .footer_logo {
    width: 156px;
    margin-bottom: 15px;
  }
  .footer_logo img {
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
    }
    .contentLeft {
      float: none;
      .footer_logo {
        margin-bottom: 18px;
      }
      .footer_logo img {
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

export default Footer;
