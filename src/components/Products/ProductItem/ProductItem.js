import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './ProductItem.scss';
import Image from '~/components/Image';
import images from '~/assets/imgs';

function ProductItem({ className, productItem }) {
    const { id, name, featured_image, compare_at_price_varies, price, compare_at_price_max, variants } = productItem;
    let dataSale;
    const RefImage = useRef();
    const [optionsWatch, setOptionsWatch] = useState([]);
    const [favorite, setFavorite] = useState(false);
    const formatToCurrency = (price) => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    const handleImage = (image) => {
        RefImage.current.src = image;
    };

    useEffect(() => {
        const optionWatch = [];
        const qtyShowOptionWatch = 4;
        for (let i = 1; i <= qtyShowOptionWatch; i++) {
            const variant = variants.find((item) => {
                const { position } = { ...item.featured_image };
                // eslint-disable-next-line eqeqeq
                return position == i;
            });
            if (variant) {
                optionWatch.push(variant);
            }
        }
        setOptionsWatch(optionWatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!compare_at_price_varies) {
        dataSale = 100 - Math.floor((price / compare_at_price_max) * 100);
        dataSale = dataSale === 0 ? '' : `-${dataSale}%`;
    }
    return (
        <div className={`swiper-products__item ${className ?? className}`}>
            <div className="swiper-products_thubnail" data-sale={compare_at_price_varies ? '' : dataSale}>
                <span className="new-tag" />
                <Link to={`/products/${id}`} className="product-item__img">
                    <Image ref={RefImage} src={featured_image} />
                </Link>
                <Link
                    to
                    className={`swiper-products_thubnail__favorite ${
                        favorite && 'swiper-products_thubnail__favorite-liked'
                    }`}
                    onClick={() => setFavorite(!favorite)}
                >
                    <Image src={images.hearted_ico} className="icon-heart icon-heart-fill" />
                    <Image src={images.heart_ico} className="icon-heart icon-heart-empty" />
                </Link>
            </div>
            <div className="product-item__info">
                <Link to={`/products/${id}`} className="product-info-name">
                    <h3>{name}</h3>
                </Link>
                <div className={`product-info-price ${!dataSale ? '' : 'product-info-price-sale'}`}>
                    <span className="price-current">{formatToCurrency(price)}</span>
                    <span className="price-old">{formatToCurrency(compare_at_price_max)}</span>
                </div>
                <div className="product-info-option-watch">
                    {optionsWatch.map((item) => {
                        return (
                            <div
                                className="product-info-option-watch__item"
                                key={item.id}
                                onClick={() => handleImage(item.featured_image.src)}
                            >
                                <div
                                    className="color"
                                    style={{
                                        backgroundImage: `url( ${item.featured_image.src} )`,
                                        backgroundSize: '37px',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center!important',
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
