import './Filter.scss';

function Filter({ maxHeight, handleShowMore, handleShowLess, handleRoll, handleClickItem, filterData }) {
    return (
        <div className="sidebar__filter-category">
            <div className="aside-title" onClick={handleRoll}>
                <h2 className="title-filter">{filterData.title}</h2>
            </div>
            <div className="aside-content edit-scrollbar-filter">
                <ul className="max-height">
                    {filterData.data.map((item, index) => (
                        <li className="aside-content__filter-item" key={item}>
                            <label htmlFor={item}>
                                <input type="checkbox" id={item} />
                                <span onClick={() => handleClickItem(filterData.type, item)}>{item}</span>
                            </label>
                        </li>
                    ))}
                </ul>
                {maxHeight && (
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
}

export default Filter;
