// src/components/HomeCarousel.js
import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselCaption } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from '../../assets/img/carousel-1.jpg';
import carousel2 from '../../assets/img/carousel-2.jpg';

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      items: [
        {
          src: carousel1,
          altText: 'Fashionable Dress',
          captionTitle: '10% Off Your First Order',
          captionSubtitle: 'Fashionable Dress',
          buttonLabel: 'Shop Now'
        },
        {
          src: carousel2,
          altText: 'Reasonable Price',
          captionTitle: '10% Off Your First Order',
          captionSubtitle: 'Reasonable Price',
          buttonLabel: 'Shop Now'
        }
      ]
    };
  }

  next = () => {
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex, items } = this.state;

    const slides = items.map((item, index) => {
      return (
        <CarouselItem key={index} active={index === activeIndex}>
          <img className="img-fluid" src={item.src} alt={item.altText} />
          <CarouselCaption className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: '700px' }}>
              <h4 className="text-light text-uppercase font-weight-medium mb-3">{item.captionTitle}</h4>
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">{item.captionSubtitle}</h3>
              <a href="#" className="btn btn-light py-2 px-3">{item.buttonLabel}</a>
            </div>
          </CarouselCaption>
        </CarouselItem>
      );
    });

    return (
      <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default HomeCarousel;
