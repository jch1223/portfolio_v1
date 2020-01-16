import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

const CarouselStyled = styled(Carousel)`
  .carousel-inner {
    width: 80%;
    margin-left: 10%;
  }
  .carousel-control-prev,
  .carousel-control-next {
    z-index: 0;
  }
`;

const CarouselControlStyled = styled(CarouselControl)`
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 22px;
    height: 77px;
  }
  .carousel-control-prev-icon {
    background-image: url('../static/index/prev_btn.png');
  }
  .carousel-control-next-icon {
    background-image: url('../static/index/next_btn.png');
  }
`;

const items = [
  {
    src: '../static/index/banner_3_shadow.png',
    altText: 'Slide 1'
  },
  {
    src: '../static/index/banner_3_shadow.png',
    altText: 'Slide 2'
  },
  {
    src: '../static/index/banner_3_shadow.png',
    altText: 'Slide 3'
  }
];

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.altText}>
          <img style={{ width: '100%' }} src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <CarouselStyled activeIndex={activeIndex} next={this.next} previous={this.previous}>
        {slides}
        <CarouselControlStyled
          direction='prev'
          directionText='Previous'
          onClickHandler={this.previous}
        />
        <CarouselControlStyled direction='next' directionText='Next' onClickHandler={this.next} />
      </CarouselStyled>
    );
  }
}

export default Slide;
