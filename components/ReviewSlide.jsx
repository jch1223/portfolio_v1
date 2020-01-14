import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const ReviewSlideStyled = styled.div`
  max-width: 890px;
  width: 100%;
  margin: auto;
  margin-bottom: 75px;
  .slick-arrow::before {
    content: '';
  }
  .reviewTitle h2 {
  }

  .slideImg1 {
    height: 465px;
    background: url('/static/index/banner_3.jpg') no-repeat 50%;
  }
  .slideImg2 {
    height: 465px;
    background: url('/static/index/banner_3.jpg') no-repeat 50%;
  }
  .slideImg3 {
    height: 465px;
    background: url('/static/index/banner_3.jpg') no-repeat 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    .slideImg1 {
      width: 300px;
      margin: 5px;
      height: 370px;
      background: url('/static/index/mobile/4.JPG') no-repeat;
    }
    .slideImg2 {
      width: 300px;
      margin: 5px;
      height: 370px;
      background: url('/static/index/mobile/4.JPG') no-repeat;
    }
    .slideImg3 {
      width: 300px;
      margin: 5px;
      height: 370px;
      background: url('/static/index/mobile/4.JPG') no-repeat;
    }
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
      <ReviewSlideStyled>
        <Slider {...settings}>
          <div>
            <div className='slideImg1' />
          </div>
          <div>
            <div className='slideImg2' />
          </div>
          <div>
            <div className='slideImg3' />
          </div>
        </Slider>
      </ReviewSlideStyled>
    );
  }
}
