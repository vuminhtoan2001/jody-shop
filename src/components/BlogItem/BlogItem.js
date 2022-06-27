import { Fragment } from 'react';
import './BlogItem.scss';

function BlogItem() {
    return (
        <div className="section-blog-item col">
            <div className="blog_thubnail">
                <a href className="blog__img">
                    <img
                        src="https://bizweb.dktcdn.net/thumb/grande/100/438/408/articles/3.jpg?v=1647230716127"
                        alt=""
                    />
                </a>
            </div>
            <div className="content-blog">
                <div className="content-blog__title">
                    <a href>Công nghệ AR là gì? Hướng dẫn sử dụng tính năng AR trên App YODY</a>
                </div>
                <p className="content-blog__description">
                    YODY ứng dụng công nghệ thực tế ảo AR vào thời trang, giúp người dùng có thể tương tác với sản phẩm
                    ngay trên thiết bị di động của mình đầy thú vị, mang đến những trải...
                </p>
                <span className="toparticle">14/03/2022</span>
            </div>
        </div>
    );
}

export default BlogItem;
