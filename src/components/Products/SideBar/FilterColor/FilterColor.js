import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './FilterColor.scss';

function FilterColor({ handleRoll, handleClickItem, filterData }) {
    return (
        <div className="sidebar__filter-color">
            <div className="aside-title" onClick={handleRoll}>
                <h2 className="title-filter">{filterData.title}</h2>
            </div>
            <div className="aside-content edit-scrollbar-filter">
                <ul className="ul-color">
                    {filterData.data.map((item, index) => (
                        <li className="aside-content__filter-item">
                            <label htmlFor={item.name}>
                                <input type="checkbox" id={item.name} />
                                <span onClick={() => handleClickItem(filterData.type, item.name)}>
                                    <FontAwesomeIcon
                                        beat
                                        icon={faCircle}
                                        style={{ marginRight: '4px', color: `${item.color}` }}
                                    />
                                    {item.name}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FilterColor;
