import { useState, useEffect } from 'react';

import './NewProducts.scss';
import ProductItem from '~/components/Products/ProductItem';
import { Slider } from '~/components/Slider';
import * as newProductService from '~/services/newProductService';

function NewProducts() {
    const [productsResult, setProductsResult] = useState([]);

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
    }
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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

    useEffect(() => {
        const fetchApi = async () => {
            const result = await newProductService.getNewProducts();
            setProductsResult(result);
        };
        fetchApi();
        // fetch('https://6262611e327d3896e285b17d.mockapi.io/products')
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
    }, []);
    console.log(productsResult);

    return (
        <div className="swiper-products">
            <Slider settings={settings} className="home-list-products-new slide-arrow row">
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
            </Slider>
        </div>
    );
}

export default NewProducts;
