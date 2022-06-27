import { Fragment } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '~/components/Image';
import images from '~/assets/imgs';
import './SliderSection.scss';

function SliderSection() {
    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
        appendDots: (dots) => (
            <div class="dot-out">
                <div class="dot-in">{dots}</div>
            </div>
        ),
        customPaging: () => (
            <div class="dot-out">
                <div class="dot-in"></div>
            </div>
        ),
    };
    return (
        <Fragment>
            <Slider {...settings} className="main__slider hide-on-mobile">
                <div className="main__slider-item">
                    <div className="img-banner">
                        <Image src={images.slider_1} alt="" />
                    </div>
                </div>
                <div className="main__slider-item">
                    <div className="img-banner">
                        <Image src={images.slider_2} alt="" />
                    </div>
                </div>
                <div className="main__slider-item">
                    <div className="img-banner">
                        <Image src={images.slider_3} alt="" />
                    </div>
                </div>
                <div className="main__slider-item">
                    <div className="img-banner">
                        <Image src={images.slider_4} alt="" />
                    </div>
                </div>
                <div className="main__slider-item">
                    <div className="img-banner">
                        <Image src={images.slider_5} alt="" />
                    </div>
                </div>
            </Slider>
            <Slider {...settings} className="main__slider main__slider-phone">
                <div className="main__slider-item">
                    <div className="img-banner">
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/slider_1_mb.jpg?1647413540824"
                            alt=""
                        />
                    </div>
                </div>
                <div className="main__slider-item">
                    <div className="img-banner">
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/slider_3_mb.jpg?1647413540824"
                            alt=""
                        />
                    </div>
                </div>
                <div className="main__slider-item">
                    <div className="img-banner">
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/slider_4_mb.jpg?1647413540824"
                            alt=""
                        />
                    </div>
                </div>
                <div className="main__slider-item">
                    <div className="img-banner">
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/slider_5_mb.jpg?1647413540824"
                            alt=""
                        />
                    </div>
                </div>
            </Slider>
        </Fragment>
    );
}

export default SliderSection;
