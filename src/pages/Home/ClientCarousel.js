import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel';

const OwlCarouselComponent = () => {
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }, []);

    return (
        <div className="owl-carousel owl-theme">
            <div className="item"><img src="img1.jpg" alt="Image 1" /></div>
            <div className="item"><img src="img2.jpg" alt="Image 2" /></div>
            <div className="item"><img src="img3.jpg" alt="Image 3" /></div>
            <div className="item"><img src="img4.jpg" alt="Image 4" /></div>
            <div className="item"><img src="img5.jpg" alt="Image 5" /></div>
            <div className="item"><img src="img6.jpg" alt="Image 6" /></div>
        </div>
    );
};

export default OwlCarouselComponent;
