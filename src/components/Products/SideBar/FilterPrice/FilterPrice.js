import './FilterPrice.scss';

function FilterPrice({ maxHeight, handleShowMore, handleShowLess, handleRoll, handleClickItem, filterData }) {
    return (
        <div className="sidebar__filter-price">
            <div className="aside-title" onClick={handleRoll}>
                <h2 className="title-filter">Khoảng giá (vnđ)</h2>
            </div>
            <div className="aside-content edit-scrollbar-filter">
                <ul className="max-height">
                    <ul className="ul-color">
                        {filterData.data.map((item, index) => (
                            <li className="aside-content__filter-item" key={item.text}>
                                <label htmlFor={item.text}>
                                    <input type="checkbox" id={item.text} />
                                    <i className="filter-price-checkbox" />
                                    <span onClick={() => handleClickItem(filterData.type, item.value)}>
                                        {item.text}
                                    </span>
                                </label>
                            </li>
                        ))}
                    </ul>
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
    );
}

export default FilterPrice;
