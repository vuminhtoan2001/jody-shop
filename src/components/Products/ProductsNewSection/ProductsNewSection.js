import Image from '~/components/Image';
import images from '~/assets/imgs';
import HomeTitleSection from '~/components/HomeTitleSection';
import NewProducts from '~/components/Products/NewProducts';
// import Button from '~/components/Button';
import './ProductsNewSection.scss';
function ProductsNewSection() {
    return (
        <div className="section-product-new">
            <div className="grid wide">
                <HomeTitleSection>everyday wear</HomeTitleSection>
                <div className="section-product-new__slider-banner">
                    <Image src={images.banner_hangngay_1} />
                </div>
                <NewProducts />
                <div className="row">
                    {/* <Button href="/">Xem tất cả 101 sản phẩm</Button> */}
                    <a href className="btn-more col l-4 l-o-4 m-12 c-12">
                        Xem tất cả 101 sản phẩm
                    </a>
                </div>
            </div>
        </div>
        // End
    );
}

export default ProductsNewSection;
