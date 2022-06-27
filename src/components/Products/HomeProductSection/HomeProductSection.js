import HomeTitleSection from '~/components/HomeTitleSection';
import TabLink from './TabLink';
import ProductItem from '~/components/Products/ProductItem';
import './HomeProductSection.scss';

function HomeProductSection() {
    return (
        <div className="main__section-products">
            <div className="grid wide">
                <div className="tabs-title">
                    <HomeTitleSection>polo - yody - thoải mái tự tin mọi lúc mọi nơi</HomeTitleSection>
                    <TabLink />
                </div>
                <div className="swiper-products">
                    <div className="swiper-products__list row" id="tab-content">
                        <ProductItem className="col l-2-4 m-3 c-6" />
                        <ProductItem className="col l-2-4 m-3 c-6" />
                        <ProductItem className="col l-2-4 m-3 c-6" />
                        <ProductItem className="col l-2-4 m-3 c-6" />
                        <ProductItem className="col l-2-4 m-3 c-6" />
                        <ProductItem className="col l-2-4 m-3 c-6" />
                        <ProductItem className="col l-2-4 m-3 c-6" />
                        <ProductItem className="col l-2-4 m-3 c-6" />
                    </div>
                </div>
                <a href="/products" className="btn-more col l-4 l-o-4 m-12 c-12">
                    Xem thêm
                </a>
            </div>
        </div>
        // end
    );
}

export default HomeProductSection;
