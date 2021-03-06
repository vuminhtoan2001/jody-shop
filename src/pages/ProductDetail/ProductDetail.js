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
                    <TitlePathLink links={['S???n ph???m', product.name]} />
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
                                            M??:&#xa0; {size && size[selected].sku}
                                        </div>
                                        <div className="product-body__top-rate">
                                            {/* <i class="product-body__top-rate-icon fa-solid fa-star"></i> */}
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <i className="product-body__top-rate-icon fa-regular fa-star" />
                                            <span>(3 nh???n x??t)</span>
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
                                                <span>M??u s???c: &#xa0;</span>
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
                                                <span>K??ch th?????c: &#xa0;</span>
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
                                            B???ng size chu???n
                                        </Link>
                                        <div className="product-body-group-btn row">
                                            <button
                                                className="product-body-btn product-body-btn__add-cart col l-6 m-6 c-6"
                                                onClick={() => dispatch(addToCart(getInfoProductAddToCart()))}
                                            >
                                                <img
                                                    src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/shopping-cart.svg?1658550439528"
                                                    alt=""
                                                />
                                                <span>Th??m v??o gi??? h??ng</span>
                                            </button>
                                            <button className="product-body-btn product-body-btn__buy-now col l-5 m-5 c-6">
                                                Mua ngay
                                            </button>
                                        </div>
                                    </div>
                                    <div className="product-body-service row">
                                        <div className="main__services-item product-body-service-item col l-6 m-6 c-0">
                                            <div className="services-item-left">
                                                <img src={images.ser_1} alt="" />
                                            </div>
                                            <div className="services-item-right">
                                                <div className="title-services">Mi???n ph?? giao h??ng</div>
                                                <div className="sumary-services">
                                                    Mi???n ph?? m???i ????n h??ng
                                                    <span className="bold-primary-color">t??? 10/3-13/3</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main__services-item product-body-service-item col l-6 m-6 c-0">
                                            <div className="services-item-left">
                                                <img src={images.ser_2} alt="" />
                                            </div>
                                            <div className="services-item-right">
                                                <div className="title-services">Thanh to??n COD</div>
                                                <div className="sumary-services">
                                                    Thanh to??n khi
                                                    <span className="bold-primary-color">nh???n h??ng (COD)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main__services-item product-body-service-item col l-6 m-6 c-0">
                                            <div className="services-item-left">
                                                <img src={images.ser_3} alt="" />
                                            </div>
                                            <div className="services-item-right">
                                                <div className="title-services">Kh??ch h??ng VIP</div>
                                                <div className="sumary-services">
                                                    ??u ????i d??nh cho
                                                    <span className="bold-primary-color">kh??ch h??ng VIP</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main__services-item product-body-service-item col l-6 m-6 c-0">
                                            <div className="services-item-left">
                                                <img src={images.ser_4} alt="" />
                                            </div>
                                            <div className="services-item-right">
                                                <div className="title-services">H??? tr??? b???o h??nh</div>
                                                <div className="sumary-services">
                                                    <span className="bold-primary-color">?????i, s???a</span>
                                                    ????? t???i t???t c??? YODY Store
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-body-script">
                                        <h2 className="product-body-script__title">?????c ??i???m s???n ph???m</h2>
                                        <div className="product-body-script__content">
                                            <p>
                                                Ch???t li???u: v???i Cool Compact v???i 49% Cotton Compact +48% Polyester-Cool
                                                +3% Spandex
                                            </p>
                                            <p>
                                                S??? k???t h???p t??? 2 s???i ri??ng bi???t t???o n??n hi???u ???ng hi???u ???ng melange ?????c ????o
                                            </p>
                                            <p>
                                                H???n ch??? x?? l??ng t???i ??a c??ng v???i b??? m???t v???i m???m m???n v?? ????? b???n cao t???
                                                Cotton Compact
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-content-bottom">
                            <HomeTitleSection>Chi ti???t s???n ph???m</HomeTitleSection>
                            <div className="product-content-bottom__main">
                                <div className="has-height">
                                    <p style={{ fontSize: '1.6rem', fontWeight: 600, textAlign: 'center' }}>
                                        Cool Compact - v???i ??anh ch???c, cho c???m nh???n m???m m???i ????n h???i{' '}
                                    </p>
                                    <p>
                                        Tr???i qua th???i gian nghi??n c???u b???n b??? v???i nhi???u th??? nghi???m v???i mong mu???n ????a ra
                                        s???n ph???m v???i b???n ch???c h??n ?????n tay ng?????i d??ng, YODY cho ra m???t d??ng s???n ph???m ??o
                                        polo Cool Compact. Thi???t k??? v???i 49% Cotton compact, 48% Polyester-Cool v?? 3%
                                        spandex t???o n??n ch???t li???u v???i ??anh ch???c t??? nhi??n, h???n ch??? x??, ?????t s???i.{' '}
                                    </p>
                                    <p>
                                        <img
                                            src="https://bizweb.sapocdn.net/100/438/408/files/chat-lieu-ao-polo-cotton-compact-la-gi-min-201fe719-5738-4125-bae8-53b0bd725347.jpg?v=1646732698115"
                                            alt=""
                                        />
                                    </p>
                                    <p style={{ textAlign: 'center' }}>
                                        <em>Th??nh ph???n ch???t li???u Cool Compact</em>
                                    </p>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
                                        C??ng ngh??? s???i v???i ????n h???i, b???n ch???c
                                    </h2>
                                    <p>Ch???t li???u s??? h???u 5 t??nh n??ng ??u vi???t:</p>
                                    <ul style={{ listStyle: 'unset', paddingLeft: '30px' }}>
                                        <li>
                                            <p>Tho??ng m??t: Ch???t li???u t???o c???m gi??c d??? ch???u, tho??ng kh?? khi m???c. </p>
                                        </li>
                                        <li>
                                            <p>
                                                Th???m h??t m??? h??i: Kh??? n??ng th???m h??t nhanh, kh??ng ????? l???i v???t n?????c tr??n b???
                                                m???t v???i.
                                            </p>
                                        </li>
                                        <li>
                                            <p>M???m m???n: Ch???t li???u v???i t???o c???m gi??c ti???p x??c d??? ch???u tr??n b??? m???t da. </p>
                                        </li>
                                        <li>
                                            <p>
                                                Co d??n ????n h???i: Ch???t li???u co d??n ????n h???i t???o c???m gi??c tho???i m??i trong
                                                qu?? tr??nh s??? d???ng.{' '}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                B???n m??u: V???i gi??? m??u t???t sau nhi???u l???n gi???t hay ti???p x??c v???i m??i tr?????ng
                                                ??nh s??ng b??n ngo??i.
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
                                        <em>Ch???t li???u Cool Compact - tr???i nghi???m tho???i m??i, d??? ch???u</em>
                                    </p>
                                </div>
                                {/* <div className="show-more">
                                    <div className="btn-more col l-4 l-o-4 m-12 c-12 show-more__btn-action-more">
                                        <span>?????c th??m</span>
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
                            <HomeTitleSection>C?? th??? b???n mu???n mua</HomeTitleSection>
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
