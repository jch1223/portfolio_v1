import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const HireSlideStyled = styled.div`
  .slick-arrow::before {
    content: '';
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

const CardContent = styled.div`
  border: 0px;
  .contentWrap {
    margin: auto;
    width: 90%;
    border: 1px solid #e5e5e5;
    border-radius: 30px;
    box-sizing: border-box;
  }
  .contentWrap:hover {
    cursor: pointer;
  }
  .cardContent {
    margin: 35px 40px 32px;
  }
  .title h5 {
    font-size: 23px;
    font-weight: bold;
    word-break: keep-all;
  }
  .tag {
    font-size: 13px;
    color: #747474;
  }
  .content {
    margin-bottom: 40px;
  }
  .content p {
    font-size: 17px;
    margin-bottom: 6px;
  }
  .footer p {
    margin: 0;
    font-size: 17px;
    display: inline-block;
  }
  .footer .plus {
    float: right;
  }
  @media (max-width: 768px) {
    .contentWrap {
      width: 99%;
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
        background: 'url(/static/index/next_btn.png) 50%',
        width: '22px',
        height: '69px'
      }}
      onClick={onClick}
    />
  );
}

function MiniNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'url(/static/index/next_btn.png) 50%',
        width: '22px',
        height: '30px'
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
        background: 'url(/static/index/prev_btn.png) 50%',
        width: '22px',
        height: '69px'
      }}
      onClick={onClick}
    />
  );
}

function MiniPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'url(/static/index/prev_btn.png) 50%',
        width: '22px',
        height: '30px'
      }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const slider = this.props.items.map(item => {
      if (item.isDeleted === 'N') {
        return (
          <CardContent
            className='card'
            key={item.index}
            id={item.index}
            onClick={this.props.layerHandler}>
            <div className='contentWrap'>
              <div className='cardContent'>
                <div className='title'>
                  <h5>{item.title}</h5>
                  <p className='tag'>{item.tag}</p>
                </div>
                <div className='content'>
                  <p>{item.content1}</p>
                  <p>{item.content2}</p>
                  <p>{item.content3}</p>
                </div>
                <div className='footer'>
                  <p>{item.deadline}</p>
                  <p className='plus'>+</p>
                </div>
              </div>
            </div>
          </CardContent>
        );
      }
    });

    const settings = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <MiniNextArrow className={'next'} />,
            prevArrow: <MiniPrevArrow className={'prev'} />
          }
        }
      ]
    };
    return (
      <HireSlideStyled>
        <Slider {...settings}>{slider}</Slider>
      </HireSlideStyled>
    );
  }
}
