import './TitlePathLink.scss';

function TitlePathLink() {
    return (
        <div className="title-path-link hide-on-mobile">
            <ul className="title-path-link__list">
                <li className="title-path-link__item">
                    <a href="/">Trang chủ</a>
                </li>
                <li className="title-path-link__item">
                    <a href="/">Nữ</a>
                </li>
                <li className="title-path-link__item">
                    <a href="/">Bộ đồ nữ</a>
                </li>
                <li className="title-path-link__item">
                    <a href="/">Bộ đồ nữ mặc nhà</a>
                </li>
            </ul>
        </div>
    );
}

export default TitlePathLink;
