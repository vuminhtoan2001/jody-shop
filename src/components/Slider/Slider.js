import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderSlick({ className, settings, children }) {
    return (
        <Slider className={className} {...settings}>
            {children}
        </Slider>
    );
}

export default SliderSlick;
