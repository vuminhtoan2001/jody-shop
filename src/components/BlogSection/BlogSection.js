import { Link } from 'react-router-dom';
import HomeTitleSection from '~/components/HomeTitleSection';
import BlogItem from '~/components/BlogItem';
import { Slider } from '~/components/Slider';
import './BlogSection.scss';

function BlogSection({ blogTitle }) {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
    }
    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="main__section-blog">
            <HomeTitleSection>{blogTitle || '#yodylove'}</HomeTitleSection>
            <div className="grid wide">
                <Slider settings={settings} className="section-blog-list slide-arrow row">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </Slider>
                <Link to="/news" className="btn-more col l-4 l-o-4 m-12 c-12">
                    Xem thêm
                </Link>
            </div>
        </div>
        // end
    );
}

export default BlogSection;
