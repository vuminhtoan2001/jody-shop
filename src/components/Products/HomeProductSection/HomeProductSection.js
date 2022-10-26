import { useState, useEffect } from 'react';
import HomeTitleSection from '~/components/HomeTitleSection';
import TabLink from './TabLink';
import ProductItem from '~/components/Products/ProductItem';
import * as productService from '~/services/productService';

import './HomeProductSection.scss';

function HomeProductSection() {
    const tabLink = [
        {
            name: 'cafe',
            url: 'cafe',
        },
        {
            name: 'Mắt chim',
            url: 'matchim',
        },
        {
            name: 'Coolmax',
            url: 'coolmax',
        },
        {
            name: 'Airycool',
            url: 'airycool',
        },
        {
            name: 'Vỏ hàu',
            url: 'vohau',
        },
        {
            name: 'cool compact',
            url: 'coolcompact',
        },
        {
            name: 'airymax',
            url: 'airymax',
        },
        {
            name: 'askin',
            url: 'askin',
        },
    ];
    const [typeLink, setTypeLink] = useState('cafe');
    const [products, setProducts] = useState([]);
    const handleClickTabLink = (link) => setTypeLink(link);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await productService.getProducts(typeLink);
            setProducts(result);
        };
        fetchApi();
    }, [typeLink]);

    return (
        <div className="main__section-products">
            <div className="grid wide">
                <div className="tabs-title">
                    <HomeTitleSection>polo - yody - thoải mái tự tin mọi lúc mọi nơi</HomeTitleSection>
                    <TabLink listTab={tabLink} setTypeLink={handleClickTabLink} currentTab={typeLink} />
                </div>
                <div className="swiper-products">
                    <div className="swiper-products__list row" id="tab-content">
                        {products?.length ? (
                            products.map((product) => (
                                <ProductItem key={product.id} className="col l-2-4 m-3 c-6" productItem={product} />
                            ))
                        ) : (
                            <p style={{ flex: 1, textAlign: 'center', color: 'var(--primary-color)' }}>
                                Không có sản phẩm nào
                            </p>
                        )}
                    </div>
                </div>
                {products ? (
                    <a href="/products" className="btn-more col l-4 l-o-4 m-12 c-12">
                        Xem thêm
                    </a>
                ) : (
                    ''
                )}
            </div>
        </div>
        // end
    );
}

export default HomeProductSection;
