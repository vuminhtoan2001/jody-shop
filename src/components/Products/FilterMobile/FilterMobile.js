import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Sort from '~/components/Products/Sort';
import SideBar from '~/components/Products/SideBar';
import './FilterMobile.scss';

function FilterMobile() {
    return (
        <div className="section-sort">
            <div className="section-sort__count hide-on-mobile-tablet">20 sản phẩm</div>
            <Sort />
            <label className="open-filter-mobile" htmlFor="filter-mobile-input">
                Bộ lọc
            </label>
            <input type="checkbox" name id="filter-mobile-input" className="filter-mobile-input" />
            <label htmlFor="filter-mobile-input" className="nav-mobile-overlay filter-mobile-overlay" />
            <div className="filter-mobile edit-scrollbar-filter">
                <div className="filter-mobile-title">
                    <label htmlFor="filter-mobile-input">
                        <FontAwesomeIcon className="icon-remove-filter-mobile" icon={faXmark} />
                    </label>
                    <span className="filter-mobile-title__text">BỘ LỌC</span>
                </div>
                <SideBar className="" />
            </div>
        </div>
    );
}

export default FilterMobile;
