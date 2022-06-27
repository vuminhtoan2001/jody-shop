import './BannerSection.scss';
import HomeTitleSection from '~/components/HomeTitleSection';
import Image from '~/components/Image';
import { Slider } from '~/components/Slider';
function BannerSection() {
    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
    };
    return (
        <div className="main__section-banner">
            <div className="grid wide">
                <HomeTitleSection>#yody</HomeTitleSection>
                <Slider {...settings} className="main__slider">
                    <div className="main__slider-item">
                        <div className="img-banner">
                            <Image
                                src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/b2.jpg?1647224230649"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="main__slider-item">
                        <div className="img-banner">
                            <Image
                                src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/b3.jpg?1647224230649"
                                alt=""
                            />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
        // end
    );
}

export default BannerSection;
