import { useState, useReducer, useEffect } from 'react';
import { orderBy, intersection } from 'lodash';

import reducer, { initState } from '~/components/Products/SideBar/useReduce/reducer';
import { handleSelected } from '~/components/Products/SideBar/useReduce/actions';

import TitlePathLink from '~/components/TitlePathLink';
import SideBar from '~/components/Products/SideBar';
import FilterMobile from '~/components/Products/FilterMobile';
import ProductItem from '~/components/Products/ProductItem';
import * as productService from '~/services/productService';

function Products() {
    const links = [{ name: 'Sản phẩm', path: '/products' }];
    const [filters, dispatch] = useReducer(reducer, initState);
    const [products, setProducts] = useState([]);
    const [sortProducts, setSortProducts] = useState(0);
    let data = [];
    let isExistFilter = false;

    function handleClickItem(typeState, payload) {
        dispatch(handleSelected(typeState, payload));
    }

    function handleSort(value) {
        setSortProducts(value);
    }
    useEffect(() => {
        let items = [];
        switch (sortProducts) {
            case 0:
                break;
            case 1:
                items = orderBy(products, ['name'], ['asc']);
                setProducts(items);
                break;
            case 2:
                items = orderBy(products, ['name'], ['desc']);
                setProducts(items);
                break;
            case 3:
                items = orderBy(products, ['price'], ['desc']);
                setProducts(items);
                break;
            case 4:
                items = orderBy(products, ['price'], ['asc']);
                setProducts(items);
                break;
            default:
                throw new Error('Invalid sort products!');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortProducts]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await productService.getProducts();
            setProducts(result);
            document.title = 'Sản phẩm';
        };
        fetchApi();
    }, []);
    const filterListProducts = () => {
        if (products) {
            const newList = products.filter((item) => {
                const { product_type, variants, tags } = item;
                let checkSize = true;
                let checkColor = true;
                let checkMaterial = true;
                let checkPrice = true;
                if (filters.size.length > 0) {
                    const check = variants.find((item) => filters.size.includes(item.option2));
                    checkSize = !!check;
                }
                if (filters.color.length > 0) {
                    const check = variants.find((item) => filters.color.includes(item.option1));
                    checkColor = !!check;
                }
                if (filters.material.length > 0) {
                    const data = intersection(filters.material, tags);
                    checkMaterial = data.length > 0 ? true : false;
                }

                const checkCategory = filters.category.length > 0 ? filters.category.includes(product_type) : true;

                if (filters.price.length > 0) {
                    checkPrice = false;
                    for (let i = 0; i < filters.price.length; i++) {
                        switch (filters.price[i]) {
                            case '<100000':
                                checkPrice = item.price < 100000 ? true : false;
                                break;
                            case '>=100000 AND <=300000':
                                checkPrice = item.price >= 100000 && item.price <= 300000 ? true : false;
                                break;
                            case '>=300000 AND <=500000':
                                checkPrice = item.price >= 300000 && item.price <= 500000 ? true : false;
                                break;
                            case '>=500000 AND <=700000':
                                checkPrice = item.price >= 500000 && item.price <= 700000 ? true : false;
                                break;
                            case '>700000':
                                checkPrice = item.price > 700000 ? true : false;
                                break;
                            default:
                                throw new Error('Invalid price!');
                        }
                        if (checkPrice) break;
                    }
                }
                return checkCategory && checkSize && checkColor && checkMaterial && checkPrice;
            });
            return newList;
        }
    };

    for (const item in filters) {
        if (filters[item].length > 0) {
            isExistFilter = true;
        }
    }
    if (isExistFilter) {
        data = filterListProducts();
    }
    return (
        <div className="main grid">
            <div className="flash-title hide-on-tablet-pc">
                Đơn hàng trền
                <b>498k</b>
                sẽ được miễn phí vận chuyển
            </div>
            <TitlePathLink links={links} />
            <div className="main__container grid wide">
                <div className="row">
                    <SideBar className="col l-3 m-0 c-0" onClickItem={handleClickItem} />
                    <div className="main__content col l-9 m-12 c-12">
                        {/* Filter mobile */}
                        <FilterMobile
                            qtyProducts={isExistFilter ? (data.length > 0 ? data.length : '0') : products.length}
                            onSort={handleSort}
                        />
                        {/* End filter mobile */}
                        <div className="section-category-products">
                            <div className="swiper-products__list row" id="main-products-list">
                                {isExistFilter ? (
                                    data.length > 0 ? (
                                        data.map((product) => (
                                            <ProductItem
                                                key={product.id}
                                                className="swiper-products__item col l-3 m-4 c-6"
                                                productItem={product}
                                            />
                                        ))
                                    ) : (
                                        <div className="products-alert-warning">
                                            Không có sản phẩm nào trong danh mục này.
                                        </div>
                                    )
                                ) : (
                                    products.map((product) => (
                                        <ProductItem
                                            key={product.id}
                                            className="swiper-products__item col l-3 m-4 c-6"
                                            productItem={product}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
