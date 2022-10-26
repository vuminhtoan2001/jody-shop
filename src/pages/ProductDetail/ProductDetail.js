import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { uniqBy } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '~/redux/slices/cartSlice';

import { Slider } from '~/components/Slider';
import * as productService from '~/services/productService';
import NewProducts from '~/components/Products/NewProducts';
import TitlePathLink from '~/components/TitlePathLink';
import HomeTitleSection from '~/components/HomeTitleSection';
import Image from '~/components/Image';
import images from '~/assets/imgs';
import Button from '~/components/Button';
import ButtonQty from '~/components/ButtonQty';
import './ProductDetail.scss';

function ProductDetail() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        // prevArrow: "<button type='button' className='gallery-img-pre'></button>",
        // nextArrow: "<button type='button' className='gallery-img-next'></button>",
    };

    const dispatch = useDispatch();
    const [product, setProduct] = useState();
    const [productColors, setProductColors] = useState();
    const [currentColor, setCurrentColor] = useState(0);
    const [size, setSize] = useState();
    const [galleryImage, setGalleryImage] = useState();
    const [selected, setSelected] = useState(0);
    const refMainImage = useRef();
    const { id } = useParams();

    const carts = useSelector((state) => state.cart);
    const [isExistCart, setIsExistCart] = useState(false);
    const [qtyInput, setQtyInput] = useState(1);

    const links = [
        { name: 'Sản phẩm', path: '/products' },
        { name: product?.name, path: `/products/${product?.id} ` },
    ];

    const qtyProduct = () => {
        const productInCart = carts.find((cart) => cart.id === product.id);
        if (productInCart) {
            return productInCart.quantity;
        } else {
            return qtyInput;
        }
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await productService.getProducts(`products/${id}`);
            setProduct(result);
            document.title = result.name;
        };
        fetchApi();
    }, [id]);

    useEffect(() => {
        if (product) {
            const variantColor = uniqBy(product.variants, 'option1');
            setProductColors(variantColor);
            const productInCart = carts.find((cart) => cart.id === product.id);
            if (productInCart) {
                setIsExistCart(true);
            } else {
                setIsExistCart(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product, carts]);

    useEffect(() => {
        if (productColors) {
            const stringArray = productColors[currentColor].sku.split('-');
            const galleryImageCode = stringArray[1];
            const images = product.images.filter((image) => image.includes(galleryImageCode.toLowerCase()));
            setGalleryImage(images);
            // size
            const sizeProduct = product.variants.filter((variant) => {
                return variant.sku.includes(galleryImageCode);
            });
            setSize(sizeProduct);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentColor, productColors]);

    const handleCurrentColor = (index) => {
        setCurrentColor(index);
    };

    const handleSize = (index) => {
        setSelected(index);
    };

    const handleHoverImage = (img) => {
        refMainImage.current.src = img;
    };

    const getInputValue = (values) => {
        setQtyInput(values);
    };

    const getInfoProductAddToCart = () => {
        return {
            id: size[selected].id,
            productId: product.id,
            name: product.name,
            price: product.price,
            variantTitle: size[selected].title,
            image: productColors[currentColor].featured_image.src,
            quantity: qtyProduct(),
        };
    };

    const formatToCurrency = (price) => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    return (
        <>
            {product && (
                <div className="main grid">
                    <TitlePathLink links={links} />
                    <div className="main__container grid wide wide-md">
                        <div className="row product-detail">
                            <div className="product-detail-left l-7 m-12 c-12">
                                <div className="row">
                                    <div className="gallery-img col l-2 m-2 c-0">
                                        <Slider settings={settings}>
                                            {galleryImage &&
                                                galleryImage.map((image) => {
                                                    return (
                                                        <div
                                                            className="gallery-img__item"
                                                            key={image}
                                                            onMouseMove={() => handleHoverImage(image)}
                                                        >
                                                            <Image src={image} />
                                                        </div>
                                                    );
                                                })}
                                        </Slider>
                                    </div>

                                    <div className="product-detail-lager-img col l-10 m-10 c-0">
                                        <Image
                                            src={productColors && productColors[currentColor].featured_image.src}
                                            ref={refMainImage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="product-right l-5 m-12 c-12">
                                <h1 className="product-name">{product.name}</h1>
                                <div className="product-body">
                                    <div className="product-body__top">
                                        <div className="product-body__top-code-id">
                                            Mã:&#xa0; {size && size[selected].sku}
                                        </div>
                                        <div className="product-body__top-rate">
                                            {/* <i class="product-body__top-rate-icon fa-solid fa-star"></i> */}
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <span>(3 nhận xét)</span>
                                        </div>
                                    </div>
                                    <div className="product-body__price">
                                        <span className="product-body__price-special">
                                            {formatToCurrency(product.price)}
                                        </span>
                                        {product.price === product.compare_at_price_max ? (
                                            false
                                        ) : (
                                            <span className="product-body__price-old">
                                                {formatToCurrency(product.compare_at_price_max)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="product-body-form">
                                        <div className="product-body-color">
                                            <div className="product-body-color__title">
                                                <span>Màu sắc: &#xa0;</span>
                                                <span className="product-body-color__title-text">
                                                    {productColors && productColors[currentColor].option1}
                                                </span>
                                            </div>
                                            <div className="product-body-color__element">
                                                {productColors &&
                                                    productColors.map((color, index) => (
                                                        <div
                                                            className="product-body-color__element-item"
                                                            key={color.id}
                                                            onClick={() => handleCurrentColor(index)}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name="product-color"
                                                                id={color.id}
                                                                className="product-body-color__input"
                                                                defaultValue={color.option1}
                                                                defaultChecked={index === 0 ? 'checked' : false}
                                                            />
                                                            <label
                                                                htmlFor={color.id}
                                                                className="product-body-color__label"
                                                                style={{
                                                                    backgroundImage: `url( ${
                                                                        color.featured_image
                                                                            ? color.featured_image.src
                                                                            : ''
                                                                    } )`,
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className="product-body-size">
                                            <div className="product-body-size__title">
                                                <span>Kích thước: &#xa0;</span>
                                                <span className="product-body-size__title-text">
                                                    {size ? size[selected].option2 : 'S'}
                                                </span>
                                            </div>
                                            <div className="product-body-size__element">
                                                {size &&
                                                    size.map((size, index) => (
                                                        <div
                                                            className="product-body-size__element-item"
                                                            key={size.id}
                                                            onClick={() => handleSize(index)}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name="product-size"
                                                                id={size.sku}
                                                                className="product-body-size__input"
                                                                defaultChecked={index === 0 ? 'checked' : false}
                                                            />
                                                            <label
                                                                htmlFor={size.sku}
                                                                className="product-body-size__label"
                                                            >
                                                                {size.option2}
                                                            </label>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className="product-body-qty">
                                            <ButtonQty
                                                large
                                                quantity={qtyProduct()}
                                                id={product.id}
                                                isExistCart={isExistCart}
                                                getInputValue={getInputValue}
                                            />
                                        </div>
                                        <Link className="product-body-example-size" to="/">
                                            Bảng size chuẩn
                                        </Link>
                                        <div className="product-body-group-btn row">
                                            <Button
                                                className="product-body-btn product-body-btn__add-cart col l-6 m-6 c-6"
                                                onClick={() => dispatch(addToCart(getInfoProductAddToCart()))}
                                            >
                                                <img
                                                    src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/shopping-cart.svg?1658550439528"
                                                    alt=""
                                                />
                                                <span>Thêm vào giỏ hàng</span>
                                            </Button>
                                            <Button
                                                className="product-body-btn product-body-btn__buy-now col l-5 m-5 c-6"
                                                to="/checkout"
                                            >
                                                Mua ngay
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="product-body-service row">
                                        <div className="main__services-item product-body-service-item col l-6 m-6 c-0">
                                            <div className="services-item-left">
                                                <img src={images.ser_1} alt="" />
                                            </div>
                                            <div className="services-item-right">
                                                <div className="title-services">Miễn phí giao hàng</div>
                                                <div className="sumary-services">
                                                    Miễn phí mọi đơn hàng
                                                    <span className="bold-primary-color">từ 10/3-13/3</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main__services-item product-body-service-item col l-6 m-6 c-0">
                                            <div className="services-item-left">
                                                <img src={images.ser_2} alt="" />
                                            </div>
                                            <div className="services-item-right">
                                                <div className="title-services">Thanh toán COD</div>
                                                <div className="sumary-services">
                                                    Thanh toán khi
                                                    <span className="bold-primary-color">nhận hàng (COD)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main__services-item product-body-service-item col l-6 m-6 c-0">
                                            <div className="services-item-left">
                                                <img src={images.ser_3} alt="" />
                                            </div>
                                            <div className="services-item-right">
                                                <div className="title-services">Khách hàng VIP</div>
                                                <div className="sumary-services">
                                                    Ưu đãi dành cho
                                                    <span className="bold-primary-color">khách hàng VIP</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main__services-item product-body-service-item col l-6 m-6 c-0">
                                            <div className="services-item-left">
                                                <img src={images.ser_4} alt="" />
                                            </div>
                                            <div className="services-item-right">
                                                <div className="title-services">Hỗ trợ bảo hành</div>
                                                <div className="sumary-services">
                                                    <span className="bold-primary-color">Đổi, sửa</span>
                                                    đồ tại tất cả YODY Store
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-body-script">
                                        <h2 className="product-body-script__title">Đặc điếm sản phẩm</h2>
                                        <div className="product-body-script__content">
                                            <p>
                                                Chất liệu: vải Cool Compact với 49% Cotton Compact +48% Polyester-Cool
                                                +3% Spandex
                                            </p>
                                            <p>
                                                Sự kết hợp từ 2 sợi riêng biệt tạo nên hiệu ứng hiệu ứng melange độc đáo
                                            </p>
                                            <p>
                                                Hạn chế xù lông tối đa cùng với bề mặt vải mềm mịn và độ bền cao từ
                                                Cotton Compact
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-content-bottom">
                            <HomeTitleSection>Chi tiết sản phẩm</HomeTitleSection>
                            <div className="product-content-bottom__main">
                                <div className="has-height">
                                    <p style={{ fontSize: '1.6rem', fontWeight: 600, textAlign: 'center' }}>
                                        Cool Compact - vải đanh chắc, cho cảm nhận mềm mại đàn hồi{' '}
                                    </p>
                                    <p>
                                        Trải qua thời gian nghiên cứu bền bỉ với nhiều thử nghiệm với mong muốn đưa ra
                                        sản phẩm vải bền chắc hơn đến tay người dùng, YODY cho ra mắt dòng sản phẩm áo
                                        polo Cool Compact. Thiết kế với 49% Cotton compact, 48% Polyester-Cool và 3%
                                        spandex tạo nên chất liệu vải đanh chắc tự nhiên, hạn chế xù, đứt sợi.{' '}
                                    </p>
                                    <p>
                                        <img
                                            src="https://bizweb.sapocdn.net/100/438/408/files/chat-lieu-ao-polo-cotton-compact-la-gi-min-201fe719-5738-4125-bae8-53b0bd725347.jpg?v=1646732698115"
                                            alt=""
                                        />
                                    </p>
                                    <p style={{ textAlign: 'center' }}>
                                        <em>Thành phần chất liệu Cool Compact</em>
                                    </p>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
                                        Công nghệ sợi vải đàn hồi, bền chắc
                                    </h2>
                                    <p>Chất liệu sở hữu 5 tính năng ưu việt:</p>
                                    <ul style={{ listStyle: 'unset', paddingLeft: '30px' }}>
                                        <li>
                                            <p>Thoáng mát: Chất liệu tạo cảm giác dễ chịu, thoáng khí khi mặc. </p>
                                        </li>
                                        <li>
                                            <p>
                                                Thấm hút mồ hôi: Khả năng thấm hút nhanh, không để lại vệt nước trên bề
                                                mặt vải.
                                            </p>
                                        </li>
                                        <li>
                                            <p>Mềm mịn: Chất liệu vải tạo cảm giác tiếp xúc dễ chịu trên bề mặt da. </p>
                                        </li>
                                        <li>
                                            <p>
                                                Co dãn đàn hồi: Chất liệu co dãn đàn hồi tạo cảm giác thoải mái trong
                                                quá trình sử dụng.{' '}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Bền màu: Vải giữ màu tốt sau nhiều lần giặt hay tiếp xúc với môi trường
                                                ánh sáng bên ngoài.
                                            </p>
                                        </li>
                                    </ul>
                                    <p>
                                        <img
                                            src="https://bizweb.sapocdn.net/100/438/408/files/chat-lieu-ao-polo-cotton-compact-dep-min.jpg?v=1646732738515"
                                            alt=""
                                        />
                                    </p>
                                    <p style={{ textAlign: 'center' }}>
                                        <em>Chất liệu Cool Compact - trải nghiệm thoải mái, dễ chịu</em>
                                    </p>
                                </div>
                                {/* <div className="show-more">
                                    <div className="btn-more col l-4 l-o-4 m-12 c-12 show-more__btn-action-more">
                                        <span>Đọc thêm</span>
                                        <i className="fa-solid fa-chevron-down" />
                                    </div>
                                    <div className="btn-more col l-4 l-o-4 m-12 c-12 show-more__btn-action-less">
                                        <span>Thu gon</span>
                                        <i className="fa-solid fa-chevron-up" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="product-offer">
                            <HomeTitleSection>Có thể bạn muốn mua</HomeTitleSection>
                            <NewProducts />
                        </div>
                    </div>
                </div>
            )}
        </>
        // end
    );
}

export default ProductDetail;
