import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-logos/redux';
import reactIcon from '@iconify/icons-logos/react';
import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import javascriptIcon from '@iconify/icons-logos/javascript';
import nextjsIcon from '@iconify/icons-logos/nextjs';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import expressIcon from '@iconify/icons-logos/express';
import gitIcon from '@iconify/icons-logos/git';
import awsIcon from '@iconify/icons-logos/aws';
import notionIcon from '@iconify/icons-cib/notion';
import slackIcon from '@iconify/icons-logos/slack-icon';
import mysqlIcon from '@iconify/icons-logos/mysql';

const SkillSlideStyled = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: auto;
  margin-bottom: 75px;
  .slick-arrow::before {
    content: '';
  }

  .slide {
    margin: 1% 4%;
    .title {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        backgroundImage: 'url(/static/index/next_btn.png)',
        width: '22px',
        height: '69px'
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        backgroundImage: 'url(/static/index/prev_btn.png)',
        width: '22px',
        height: '69px'
      }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            className: 'slider variable-width',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            nextArrow: <></>,
            prevArrow: <></>
          }
        }
      ]
    };
    return (
      <SkillSlideStyled>
        <Slider {...settings}>
          <div className='slide_box'>
            <div className='slide'>
              <div className='title'> FRONT-END</div>
              <div>
                <Icon style={{ margin: '10px' }} width='40' icon={html5} />
                <Icon style={{ margin: '10px' }} width='40' icon={css3} />
                <Icon style={{ margin: '10px' }} width='50' icon={javascriptIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={reactIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={reduxIcon} />
              </div>
            </div>
          </div>

          <div className='slide_box'>
            <div className='slide'>
              <div className='title'> BACK-END</div>
              <div>
                <Icon style={{ margin: '10px' }} width='40' icon={nodejsIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={expressIcon} />
                <Icon style={{ margin: '10px' }} width='40' icon={nextjsIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={mysqlIcon} />
              </div>
            </div>
          </div>

          <div className='slide_box'>
            <div className='slide'>
              <div className='title'> DEV TOOLS</div>
              <div>
                <Icon style={{ margin: '10px' }} width='40' icon={gitIcon} />
                <Icon style={{ margin: '10px' }} width='40' icon={awsIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={notionIcon} />
                <Icon style={{ margin: '10px' }} width='50' icon={slackIcon} />
              </div>
            </div>
          </div>
        </Slider>
      </SkillSlideStyled>
    );
  }
}
