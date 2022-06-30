import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Filter from './Filter';
import './SideBar.scss';

function SideBar({ className }) {
    const data = {
        category: {
            title: 'Loại sản phẩm',
            data: ['áo sơ mi', 'áo thun', 'áo khoác nam', 'bộ đồ nữ', 'quần đùi nam', 'áo da nam'],
        },
        size: {
            title: 'Kích thước',
            data: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
        },
        material: {
            title: 'Chất liệu',
            data: ['Cotton', 'Vỏ hàu', 'Tuyết mưa', 'Nano', 'Bamboo', 'Tuýt si', 'Lụa', 'Da bò', 'Vải tơ', 'Spandex'],
        },
    };
    function handleRoll(e) {
        const aside_title = e.target;
        const aside_content = aside_title.nextSibling;
        aside_content.classList.toggle('active');
    }
    function handleShowMore(e) {
        const btnShowMore = e.target;
        const btnShowLess = btnShowMore.nextSibling;
        const maxHeight = btnShowMore.previousSibling;
        maxHeight.classList.remove('max-height');
        btnShowMore.classList.add('d-none');
        btnShowLess.classList.remove('d-none');
    }
    function handleShowLess(e) {
        const btnShowLess = e.target;
        const btnShowMore = btnShowLess.previousSibling;
        const maxHeight = btnShowMore.previousSibling;
        maxHeight.classList.add('max-height');
        btnShowMore.classList.remove('d-none');
        btnShowLess.classList.add('d-none');
    }

    return (
        <div className={`sidebar ${className ?? className}`}>
            {/* Hiện tại chưa làm được chức năng này  */}
            {/* <div className="sidebar__filter-selected">
                <div className="sidebar__filter-selected-header">
                    <span className="sidebar__filter-selected-title">Bạn chọn</span>
                    <span className="sidebar__filter-selected-clearAll">
                        Bỏ hết
                        <i className="fa-solid fa-xmark" />
                    </span>
                </div>
                <div className="sidebar__filter-selected-list">
                    <ul>
                        <li className="sidebar__filter-selected-item" htmlFor="áo sơ mi">
                            <i className="fa-solid fa-xmark" />
                            <span>Xanh navy</span>
                        </li>
                        <li className="sidebar__filter-selected-item">
                            <i className="fa-solid fa-xmark" />
                            <span>Xanh mít</span>
                        </li>
                        <li className="sidebar__filter-selected-item">
                            <i className="fa-solid fa-xmark" />
                            <span>Xanh navy</span>
                        </li>
                        <li className="sidebar__filter-selected-item">
                            <i className="fa-solid fa-xmark" />
                            <span>Xanh navy</span>
                        </li>
                    </ul>
                </div>
            </div> */}
            {/* EndPoint : Array selected */}
            {/* Filter category */}
            <Filter
                handleShowLess={handleShowLess}
                handleShowMore={handleShowMore}
                handleClickItem={handleShowLess}
                handleRoll={handleRoll}
                filterData={data.category}
                maxHeight
            />
            <div className="sidebar__filter-color">
                <div className="aside-title" onClick={handleRoll}>
                    <h2 className="title-filter">Màu sắc</h2>
                </div>
                <div className="aside-content edit-scrollbar-filter">
                    <ul className="ul-color max-height">
                        <li className="aside-content__filter-item">
                            <label htmlFor="color-1">
                                <input type="checkbox" id="color-1" />
                                <span>
                                    <FontAwesomeIcon icon={faCircle} style={{ color: '#03204c' }} />
                                    Xanh navy
                                </span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="color-2">
                                <input type="checkbox" id="color-2" />
                                <span>
                                    <i className="fa-solid fa-circle" style={{ color: '#000000' }} />
                                    Đen
                                </span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="color-3">
                                <input type="checkbox" id="color-3" />
                                <span>
                                    <i className="fa-solid fa-circle" style={{ color: '#62bf5e' }} />
                                    Xanh lá
                                </span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="color-4">
                                <input type="checkbox" id="color-4" />
                                <span>
                                    <i className="fa-solid fa-circle" style={{ color: '#613b0d' }} />
                                    Nâu
                                </span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="color-5">
                                <input type="checkbox" id="color-5" />
                                <span>
                                    <i className="fa-solid fa-circle" style={{ color: '#8cd6c4' }} />
                                    Xanh mint
                                </span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="color-7">
                                <input type="checkbox" id="color-7" />
                                <span>
                                    <i className="fa-solid fa-circle" style={{ color: '#f10008' }} />
                                    Đỏ
                                </span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="color-8">
                                <input type="checkbox" id="color-8" />
                                <span>
                                    <i className="fa-solid fa-circle" style={{ color: '#efe159' }} />
                                    Vàng
                                </span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="color-9">
                                <input type="checkbox" id="color-9" />
                                <span>
                                    <i className="fa-solid fa-circle" style={{ color: '#f19f00' }} />
                                    Cam
                                </span>
                            </label>
                        </li>
                    </ul>
                    <p className="filter-show-more" onClick={handleShowMore}>
                        Xem thêm
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/more_filter.svg?1647851516701"
                            alt=""
                        />
                    </p>
                    <p className="filter-show-less d-none" onClick={handleShowLess}>
                        Thu gọn
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/more_filter.svg?1647851516701"
                            alt=""
                        />
                    </p>
                </div>
            </div>
            {/* Filter size */}
            <Filter
                handleShowLess={handleShowLess}
                handleShowMore={handleShowMore}
                handleClickItem={handleShowLess}
                handleRoll={handleRoll}
                filterData={data.size}
                maxHeight
            />
            {/* Filter material */}
            <Filter
                handleShowLess={handleShowLess}
                handleShowMore={handleShowMore}
                handleClickItem={handleShowLess}
                handleRoll={handleRoll}
                filterData={data.material}
                maxHeight
            />
            <div className="sidebar__filter-price">
                <div className="aside-title" onClick={handleRoll}>
                    <h2 className="title-filter">Khoảng giá (vnđ)</h2>
                </div>
                <div className="aside-content edit-scrollbar-filter">
                    <ul className="max-height">
                        <li className="aside-content__filter-item">
                            <label htmlFor="price-1">
                                <input type="checkbox" id="price-1" />
                                <i className="filter-price-checkbox" />
                                <span>Nhỏ hơn 100.000đ</span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="price-2">
                                <input type="checkbox" id="price-2" />
                                <i className="filter-price-checkbox" />
                                <span>Từ 100.000đ - 300.000đ</span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="price-3">
                                <input type="checkbox" id="price-3" />
                                <i className="filter-price-checkbox" />
                                <span>Từ 300.000đ - 500.000đ</span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="price-4">
                                <input type="checkbox" id="price-4" />
                                <i className="filter-price-checkbox" />
                                <span>Từ 500.000đ - 700.000đ</span>
                            </label>
                        </li>
                        <li className="aside-content__filter-item">
                            <label htmlFor="price-5">
                                <input type="checkbox" id="price-5" />
                                <i className="filter-price-checkbox" />
                                <span>Lớn hơn 700.000đ</span>
                            </label>
                        </li>
                    </ul>
                    <p className="filter-show-more" onClick={handleShowMore}>
                        Xem thêm
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/more_filter.svg?1647851516701"
                            alt=""
                        />
                    </p>
                    <p className="filter-show-less d-none" onClick={handleShowLess}>
                        Thu gọn
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/more_filter.svg?1647851516701"
                            alt=""
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
