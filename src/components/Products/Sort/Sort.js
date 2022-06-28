import './Sort.scss';

function Sort() {
    return (
        <div className="section-sort__selected-sort" id="sort">
            <span>Sắp xếp theo</span>
            <label className="section-sort__selected-sort__title">
                <span className="text">
                    <span>Mặc định</span>
                    <ul className="section-sort__selected-sort__option">
                        <li className="btn-quick-sort active">
                            <a href onclick="sort(this,value=0)">
                                Mặc định
                            </a>
                        </li>
                        <li className="btn-quick-sort">
                            <a href onclick="sort(this,value=1)">
                                Từ A-Z
                            </a>
                        </li>
                        <li className="btn-quick-sort">
                            <a href onclick="sort(this,value=2)">
                                Từ Z-A
                            </a>
                        </li>
                        <li className="btn-quick-sort">
                            <a href onclick="sort(this,value=3)">
                                Giá giảm dần
                            </a>
                        </li>
                        <li className="btn-quick-sort">
                            <a href onclick="sort(this,value=4)">
                                Giá tăng dần
                            </a>
                        </li>
                        <li className="btn-quick-sort">
                            <a href onclick="sort(this,value=5)">
                                Mới nhât
                            </a>
                        </li>
                    </ul>
                </span>
            </label>
        </div>
    );
}

export default Sort;
