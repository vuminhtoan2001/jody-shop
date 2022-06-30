import { useState } from 'react';
import './Sort.scss';

const selects = [
    {
        id: 0,
        title: 'Mặc định',
    },
    {
        id: 1,
        title: 'Từ A-Z',
    },
    {
        id: 2,
        title: 'Từ Z-A',
    },
    {
        id: 3,
        title: 'Giá giảm dần',
    },
    {
        id: 4,
        title: 'Giá tăng dần',
    },
];

function Sort() {
    const [selected, setSelected] = useState(0);
    function handleSelected(id) {
        setSelected(id);
    }

    return (
        <div className="section-sort__selected-sort" id="sort">
            <span>Sắp xếp theo</span>
            <label className="section-sort__selected-sort__title">
                <span className="text">
                    <span>{selects.find((select) => select.id === selected).title}</span>
                    <ul className="section-sort__selected-sort__option">
                        {selects.map((select) => (
                            <li
                                className={`btn-quick-sort ${selected === select.id ? 'active' : ''}`}
                                onClick={() => handleSelected(select.id)}
                            >
                                <a href>{select.title}</a>
                            </li>
                        ))}
                    </ul>
                </span>
            </label>
        </div>
    );
}

export default Sort;
