import { useState, useEffect, useCallback } from 'react';
import _intersection from 'lodash/intersection';

import TitlePathLink from '~/components/TitlePathLink';
import SideBar from '~/components/Products/SideBar';
import FilterMobile from '~/components/Products/FilterMobile';
import ProductItem from '~/components/Products/ProductItem';
import * as productService from '~/services/productService';

function Products() {
    const [filters, setFilters] = useState({});
    const [products, setProducts] = useState([]);
    const handleSetFilters = useCallback((result) => setFilters(result), []);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await productService.getProducts();
            setProducts(result);
        };
        fetchApi();
    }, []);
    console.log(filters);
    const filterListProducts = () => {
        // console.log(products);
        if (products) {
            const newList = products.filter((item) => {
                const { product_type } = item;
                // console.log(product_type);
                const data = _intersection(filters.category, product_type);
                const check = data.length ? true : false;
                return check;
            });
            return newList;
        }
    };
    const data = filterListProducts();
    console.log(data);
    return (
        <div className="main grid">
            <div className="flash-title hide-on-tablet-pc">
                Đơn hàng trền
                <b>498k</b>
                sẽ được miễn phí vận chuyển
            </div>
            <TitlePathLink />
            <div className="main__container grid wide">
                <div className="row">
                    <SideBar className="col l-3 m-0 c-0" handleSetFilters={handleSetFilters} />
                    <div className="main__content col l-9 m-12 c-12">
                        {/* Filter mobile */}
                        <FilterMobile qtyProducts={products.length} />
                        {/* End filter mobile */}
                        <div className="section-category-products">
                            <div className="swiper-products__list row" id="main-products-list">
                                {products.length &&
                                    products.map((product) => (
                                        <ProductItem
                                            key={product.id}
                                            className="swiper-products__item col l-3 m-4 c-6"
                                            productItem={product}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // end
    );
}

export default Products;
