import React from 'react';
import MyClientCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import client1 from '../../assets/img/vendor-1.jpg';
import client2 from '../../assets/img/vendor-2.jpg';
import client3 from '../../assets/img/vendor-3.jpg';
import client4 from '../../assets/img/vendor-4.jpg';
import client5 from '../../assets/img/vendor-5.jpg';
import client6 from '../../assets/img/vendor-6.jpg';
import client7 from '../../assets/img/vendor-7.jpg';

const items = [
  {
    src: client1,
    altText: 'Fashionable Dress',
    captionTitle: '10% Off Your First Order',
    captionSubtitle: 'Fashionable Dress',
    buttonLabel: 'Shop Now'
  },
  {
    src: client2,
    altText: 'Reasonable Price',
    captionTitle: '10% Off Your First Order',
    captionSubtitle: 'Reasonable Price',
    buttonLabel: 'Shop Now'
  },
  {
    src: client3,
    altText: 'Reasonable Price',
    captionTitle: '10% Off Your First Order',
    captionSubtitle: 'Reasonable Price',
    buttonLabel: 'Shop Now'
  },
  {
    src: client4,
    altText: 'Reasonable Price',
    captionTitle: '10% Off Your First Order',
    captionSubtitle: 'Reasonable Price',
    buttonLabel: 'Shop Now'
  },
  {
    src: client5,
    altText: 'Reasonable Price',
    captionTitle: '10% Off Your First Order',
    captionSubtitle: 'Reasonable Price',
    buttonLabel: 'Shop Now'
  },
  {
    src: client6,
    altText: 'Reasonable Price',
    captionTitle: '10% Off Your First Order',
    captionSubtitle: 'Reasonable Price',
    buttonLabel: 'Shop Now'
  },
  {
    src: client7,
    altText: 'Reasonable Price',
    captionTitle: '10% Off Your First Order',
    captionSubtitle: 'Reasonable Price',
    buttonLabel: 'Shop Now'
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ClientCarousel = ({ deviceType }) => (
  <MyClientCarousel 
    swipeable={false}
    draggable={false}
    // showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay= {true} // autoPlay={deviceType !== "mobile" ? true : false}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
    deviceType={deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-0-px"
  >
    {items.map((item, index) => (
      <div key={index} className="vendor-item border p-4">
        <img src={item.src} alt={item.altText} />
        {/* <div className="carousel-caption">
          <h3>{item.captionTitle}</h3>
          <p>{item.captionSubtitle}</p>
          <button>{item.buttonLabel}</button>
        </div> */}
      </div>
    ))}
  </MyClientCarousel>
);

export default ClientCarousel;
