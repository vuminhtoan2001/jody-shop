import { Link } from 'react-router-dom';
import './TitlePathLink.scss';

function TitlePathLink({ links }) {
    return (
        <div className="title-path-link hide-on-mobile">
            <ul className="title-path-link__list">
                {links.map((link, index) => (
                    <li className="title-path-link__item" key={index}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
                {/* <li className="title-path-link__item">
                    <a href="/">Bộ đồ nữ</a>
                </li>
                <li className="title-path-link__item">
                    <a href="/">Bộ đồ nữ mặc nhà</a>
                </li> */}
            </ul>
        </div>
    );
}

export default TitlePathLink;
