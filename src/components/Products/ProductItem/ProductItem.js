import './ProductItem.scss';
import Image from '~/components/Image';
import images from '~/assets/imgs';

function ProductItem({ className }) {
    return (
        <div className={`swiper-products__item ${className ?? className}`}>
            <div className="swiper-products_thubnail" data-sale="10%">
                <span className="new-tag" />
                <a href className="product-item__img">
                    <Image src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000" />
                </a>
                <a href className="swiper-products_thubnail__favorite swiper-products_thubnail__favorite-liked">
                    <Image src={images.hearted_ico} className="icon-heart icon-heart-fill" />
                    <Image src={images.heart_ico} className="icon-heart icon-heart-empty" />
                </a>
            </div>
            <div className="product-item__info">
                <a href className="product-info-name">
                    <h3>Áo polo nữ cafe phối màu</h3>
                </a>
                <div className="product-info-price product-info-price-sale">
                    <span className="price-current">299.000đ</span>
                    <span className="price-old">329.000đ</span>
                </div>
                <div className="product-info-option-watch">
                    <div className="product-info-option-watch__item">
                        <div
                            className="color"
                            style={{
                                backgroundImage:
                                    'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                backgroundSize: '37px',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center!important',
                            }}
                        />
                    </div>
                    <div className="product-info-option-watch__item">
                        <div
                            className="color"
                            style={{
                                backgroundImage:
                                    'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                backgroundSize: '37px',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center!important',
                            }}
                        />
                    </div>
                    <div className="product-info-option-watch__item">
                        <div
                            className="color"
                            style={{
                                backgroundImage:
                                    'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                backgroundSize: '37px',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center!important',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
