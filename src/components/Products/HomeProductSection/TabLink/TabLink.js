import { useEffect } from 'react';

import './TabLink.scss';
function TabLink() {
    useEffect(() => {
        fetch(`https://yody.vn/ao-polo-coolmax?view=ajaxload`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);
    return (
        <div className="title-desktop">
            <ul className="tab-list">
                <li className="tab-link current">cafe</li>
                <li className="tab-link">mắt chim</li>
                <li className="tab-link">coolmax</li>
                <li className="tab-link">airy cool</li>
                <li className="tab-link">vỏ hàu</li>
                <li className="tab-link">cool compact</li>
                <li className="tab-link">airmax</li>
                <li className="tab-link">askin</li>
            </ul>
        </div>
    );
}

export default TabLink;
