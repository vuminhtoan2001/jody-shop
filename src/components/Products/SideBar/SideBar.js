import Filter from './Filter';
import FilterColor from './FilterColor';
import FilterPrice from './FilterPrice';
import './SideBar.scss';
const data = {
    category: {
        type: 'category',
        title: 'Loại sản phẩm',
        data: [
            'Áo sơ mi nam',
            'Áo polo nam Yody',
            'Áo polo nữ Yody',
            'Chân váy',
            'Áo thun/ Áo phông nữ',
            'Áo sơ mi nữ',
            'Áo polo trẻ em',
            'Áo da nam',
        ],
    },
    size: {
        type: 'size',
        title: 'Kích thước',
        data: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    },
    material: {
        type: 'material',
        title: 'Chất liệu',
        data: [
            'Cotton',
            'Vỏ hàu',
            'Pique',
            'Cool Compact',
            'Coolmax',
            'Tuyết mưa',
            'Vải dạ',
            'Nano',
            'Bamboo',
            'Tuytsi',
            'Lụa',
            'Da bò',
            'Vải tơ',
            'Spandex',
        ],
    },
    color: {
        type: 'color',
        title: 'Màu sắc',
        data: [
            { name: 'Xanh navy', color: '#03204c' },
            { name: 'Đen', color: '#000' },
            { name: 'Trắng', color: '#fff' },
            { name: 'Xanh lá', color: '#62bf5e' },
            { name: 'Nâu', color: '#613b0d' },
            { name: 'Xanh mint', color: '#8cd6c4' },
            { name: 'Đỏ', color: '#f10008' },
            { name: 'Vàng', color: '#efe159' },
            { name: 'Cam', color: '#f19f00' },
            { name: 'Hồng', color: '#DC85AC' },
            { name: 'Tím', color: '#C48FE2' },
            { name: 'Be', color: '#E3CCB5' },
        ],
    },
    price: {
        type: 'price',
        title: 'Khoảng giá (vnđ)',
        data: [
            { text: 'Nhỏ hơn 100.000đ', value: '<100000' },
            { text: 'Từ 100.000đ - 300.000đ', value: '>=100000 AND <=300000' },
            { text: 'Từ 300.000đ - 500.000đ', value: '>=300000 AND <=500000' },
            { text: 'Từ 500.000đ - 700.000đ', value: '>=500000 AND <=700000' },
            { text: 'Lớn hơn 700.000đ', value: '>700000' },
        ],
    },
};
function SideBar({ className, onClickItem }) {
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
            {/* Filter category */}
            <Filter
                handleShowLess={handleShowLess}
                handleShowMore={handleShowMore}
                handleClickItem={onClickItem}
                handleRoll={handleRoll}
                filterData={data.category}
                maxHeight
            />
            <FilterColor handleClickItem={onClickItem} handleRoll={handleRoll} filterData={data.color} />
            {/* Filter size */}
            <Filter
                handleShowLess={handleShowLess}
                handleShowMore={handleShowMore}
                handleClickItem={onClickItem}
                handleRoll={handleRoll}
                filterData={data.size}
                maxHeight
            />
            {/* Filter material */}
            <Filter
                handleShowLess={handleShowLess}
                handleShowMore={handleShowMore}
                handleClickItem={onClickItem}
                handleRoll={handleRoll}
                filterData={data.material}
                maxHeight
            />
            <FilterPrice
                handleShowLess={handleShowLess}
                handleShowMore={handleShowMore}
                handleClickItem={onClickItem}
                handleRoll={handleRoll}
                filterData={data.price}
                maxHeight
            />
        </div>
    );
}

export default SideBar;
