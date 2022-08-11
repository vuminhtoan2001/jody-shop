import { Link } from 'react-router-dom';
import TitlePathLink from '~/components/TitlePathLink';
import './News.scss';

function News() {
    const links = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Yody news', path: '/news' },
    ];
    console.log(links);
    return (
        <div className="container-news">
            <div className="grid wide">
                {/* <div className="title-path-link hide-on-mobile">
                    <ul className="title-path-link__list">
                        <li className="title-path-link__item">
                            <Link to="/news/1"="/">Trang chủ</Link>
                        </li>
                        <li className="title-path-link__item">
                            <Link to="/news/1"="news.html">Yody news</Link>
                        </li>
                        <li className="title-path-link__item">
                            <Link to="/news/1"="news.html">Yody news</Link>
                        </li>
                    </ul>
                </div> */}
                <TitlePathLink links={links} />
                <div className="container-news-list row">
                    <div className="news-item col l-4 m-6 c-12">
                        <Link to="/news/1" className="news-item-thumb">
                            <img
                                src="https://bizweb.sapocdn.net/thumb/1024x1024/100/438/408/articles/yody-ra-mat-thuong-hieu-thoi-trang-tre-em-yody-kids.jpg?v=1634139812277"
                                alt=""
                            />
                        </Link>
                        <div className="news-item__content">
                            <Link to="/news/1" className="type-of-new">
                                Tin hot
                            </Link>
                            <Link className="news-item__content-title" to="/news/1">
                                Lịch nghỉ 10/3 thế nào? Mặc gì đi chơi Giỗ tổ Hùng Vương
                            </Link>
                            <p className="news-item__content-script">
                                Lịch nghỉ 10/3 sắp đến, bạn đã có kế hoạch gì chưa? Để có vẻ ngoài thật ấn tượng hãy “bỏ
                                túi” cho mình những “bộ cánh” sành điệu dưới đây nhé.
                            </p>
                            <div className="news-item__content-footer">
                                <div className="news-item-author">Yody</div>
                                <div className="news-item-date">07/04/2022</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item col l-4 m-6 c-12">
                        <Link to="/news/1" className="news-item-thumb">
                            <img
                                src="https://bizweb.sapocdn.net/thumb/1024x1024/100/438/408/articles/sinh-nhat-yody-8-tuoi.png?v=1648733773757"
                                alt=""
                            />
                        </Link>
                        <div className="news-item__content">
                            <Link to="/news/1" className="type-of-new">
                                Tin hot
                            </Link>
                            <Link className="news-item__content-title" to="/news/1">
                                Mừng sinh nhật YODY 8 tuổi - Tặng 8888 phần quà "miễn phí"
                            </Link>
                            <p className="news-item__content-script">
                                Kỷ niệm sinh nhật 8 tuổi, YODY tổ chức chương trình tri ân lớn dành tặng đến tất cả
                                khách hàng. Những sành điệu dưới đây nhé.
                            </p>
                            <div className="news-item__content-footer">
                                <div className="news-item-author">Yody</div>
                                <div className="news-item-date">01/04/2022</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item col l-4 m-12 c-0 tin-noi-bat">
                        <div className="news-prominent">
                            <div className="news-prominent__title">Tin nổi bật</div>
                            <ul className="news-prominent__list">
                                <li className="news-prominent__item">
                                    <Link to="/news/1" className="news-prominent__item-img-link">
                                        <img
                                            src="https://bizweb.sapocdn.net/thumb/medium/100/438/408/articles/ra-mat-website-yody-vn.png?v=1638433775493"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="news-prominent__item-content">
                                        <Link to="/news/1" className="type-of-new">
                                            Tin hot
                                        </Link>
                                        <Link className="news-item__content-title" to="/news/1">
                                            YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                        </Link>
                                    </div>
                                </li>
                                <li className="news-prominent__item">
                                    <Link to="/news/1" className="news-prominent__item-img-link">
                                        <img
                                            src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/articles/balo-di-hoc-yodyvn.jpg?v=1660122904607"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="news-prominent__item-content">
                                        <Link to="/news/1" className="type-of-new">
                                            Tin hot
                                        </Link>
                                        <Link className="news-item__content-title" to="/news/1">
                                            YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                        </Link>
                                    </div>
                                </li>
                                <li className="news-prominent__item">
                                    <Link to="/news/1" className="news-prominent__item-img-link">
                                        <img
                                            src="https://bizweb.sapocdn.net/thumb/medium/100/438/408/articles/ra-mat-website-yody-vn.png?v=1638433775493"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="news-prominent__item-content">
                                        <Link to="/news/1" className="type-of-new">
                                            Tin hot
                                        </Link>
                                        <Link className="news-item__content-title" to="/news/1">
                                            YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                        </Link>
                                    </div>
                                </li>
                                <li className="news-prominent__item">
                                    <Link to="/news/1" className="news-prominent__item-img-link">
                                        <img
                                            src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/articles/old-school-yodyvn.jpg?v=1660031059110"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="news-prominent__item-content">
                                        <Link to="/news/1" className="type-of-new">
                                            Tin hot
                                        </Link>
                                        <Link className="news-item__content-title" to="/news/1">
                                            YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                        </Link>
                                    </div>
                                </li>
                                <li className="news-prominent__item">
                                    <Link to="/news/1" className="news-prominent__item-img-link">
                                        <img
                                            src="https://bizweb.sapocdn.net/thumb/medium/100/438/408/articles/ra-mat-website-yody-vn.png?v=1638433775493"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="news-prominent__item-content">
                                        <Link to="/news/1" className="type-of-new">
                                            Tin hot
                                        </Link>
                                        <Link className="news-item__content-title" to="/news/1">
                                            YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="news-item col l-4 m-6 c-12">
                        <Link to="/news/1" className="news-item-thumb">
                            <img
                                src="https://bizweb.sapocdn.net/thumb/1024x1024/100/438/408/articles/yody-ra-mat-thuong-hieu-thoi-trang-tre-em-yody-kids.jpg?v=1634139812277"
                                alt=""
                            />
                        </Link>
                        <div className="news-item__content">
                            <Link to="/news/1" className="type-of-new">
                                Tin hot
                            </Link>
                            <Link className="news-item__content-title" to="/news/1">
                                Lịch nghỉ 10/3 thế nào? Mặc gì đi chơi Giỗ tổ Hùng Vương
                            </Link>
                            <p className="news-item__content-script">
                                Lịch nghỉ 10/3 sắp đến, bạn đã có kế hoạch gì chưa? Để có vẻ ngoài thật ấn tượng hãy “bỏ
                                túi” cho mình những “bộ cánh” sành điệu dưới đây nhé.
                            </p>
                            <div className="news-item__content-footer">
                                <div className="news-item-author">Yody</div>
                                <div className="news-item-date">07/04/2022</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item col l-4 m-6 c-12">
                        <Link to="/news/1" className="news-item-thumb">
                            <img
                                src="https://bizweb.sapocdn.net/thumb/1024x1024/100/438/408/articles/sinh-nhat-yody-8-tuoi.png?v=1648733773757"
                                alt=""
                            />
                        </Link>
                        <div className="news-item__content">
                            <Link to="/news/1" className="type-of-new">
                                Tin hot
                            </Link>
                            <Link className="news-item__content-title" to="/news/1">
                                Mừng sinh nhật YODY 8 tuổi - Tặng 8888 phần quà "miễn phí"
                            </Link>
                            <p className="news-item__content-script">
                                Kỷ niệm sinh nhật 8 tuổi, YODY tổ chức chương trình tri ân lớn dành tặng đến tất cả
                                khách hàng. Những sành điệu dưới đây nhé.
                            </p>
                            <div className="news-item__content-footer">
                                <div className="news-item-author">Yody</div>
                                <div className="news-item-date">01/04/2022</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item col l-4 m-6 c-12">
                        <Link to="/news/1" className="news-item-thumb">
                            <img
                                src="https://bizweb.sapocdn.net/thumb/1024x1024/100/438/408/articles/yody-ra-mat-thuong-hieu-thoi-trang-tre-em-yody-kids.jpg?v=1634139812277"
                                alt=""
                            />
                        </Link>
                        <div className="news-item__content">
                            <Link to="/news/1" className="type-of-new">
                                Tin hot
                            </Link>
                            <Link className="news-item__content-title" to="/news/1">
                                Lịch nghỉ 10/3 thế nào? Mặc gì đi chơi Giỗ tổ Hùng Vương
                            </Link>
                            <p className="news-item__content-script">
                                Lịch nghỉ 10/3 sắp đến, bạn đã có kế hoạch gì chưa? Để có vẻ ngoài thật ấn tượng hãy “bỏ
                                túi” cho mình những “bộ cánh” sành điệu dưới đây nhé.
                            </p>
                            <div className="news-item__content-footer">
                                <div className="news-item-author">Yody</div>
                                <div className="news-item-date">07/04/2022</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item col l-4 m-6 c-12">
                        <Link to="/news/1" className="news-item-thumb">
                            <img
                                src="https://bizweb.sapocdn.net/thumb/1024x1024/100/438/408/articles/sinh-nhat-yody-8-tuoi.png?v=1648733773757"
                                alt=""
                            />
                        </Link>
                        <div className="news-item__content">
                            <Link to="/news/1" className="type-of-new">
                                Tin hot
                            </Link>
                            <Link className="news-item__content-title" to="/news/1">
                                Mừng sinh nhật YODY 8 tuổi - Tặng 8888 phần quà "miễn phí"
                            </Link>
                            <p className="news-item__content-script">
                                Kỷ niệm sinh nhật 8 tuổi, YODY tổ chức chương trình tri ân lớn dành tặng đến tất cả
                                khách hàng. Những sành điệu dưới đây nhé.
                            </p>
                            <div className="news-item__content-footer">
                                <div className="news-item-author">Yody</div>
                                <div className="news-item-date">01/04/2022</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item col l-4 m-6 c-12">
                        <Link to="/news/1" className="news-item-thumb">
                            <img
                                src="https://bizweb.sapocdn.net/thumb/1024x1024/100/438/408/articles/yody-ra-mat-thuong-hieu-thoi-trang-tre-em-yody-kids.jpg?v=1634139812277"
                                alt=""
                            />
                        </Link>
                        <div className="news-item__content">
                            <Link to="/news/1" className="type-of-new">
                                Tin hot
                            </Link>
                            <Link className="news-item__content-title" to="/news/1">
                                Lịch nghỉ 10/3 thế nào? Mặc gì đi chơi Giỗ tổ Hùng Vương
                            </Link>
                            <p className="news-item__content-script">
                                Lịch nghỉ 10/3 sắp đến, bạn đã có kế hoạch gì chưa? Để có vẻ ngoài thật ấn tượng hãy “bỏ
                                túi” cho mình những “bộ cánh” sành điệu dưới đây nhé.
                            </p>
                            <div className="news-item__content-footer">
                                <div className="news-item-author">Yody</div>
                                <div className="news-item-date">07/04/2022</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item col l-4 m-6 c-12">
                        <Link to="/news/1" className="news-item-thumb">
                            <img
                                src="https://bizweb.sapocdn.net/thumb/1024x1024/100/438/408/articles/sinh-nhat-yody-8-tuoi.png?v=1648733773757"
                                alt=""
                            />
                        </Link>
                        <div className="news-item__content">
                            <Link to="/news/1" className="type-of-new">
                                Tin hot
                            </Link>
                            <Link className="news-item__content-title" to="/news/1">
                                Mừng sinh nhật YODY 8 tuổi - Tặng 8888 phần quà "miễn phí"
                            </Link>
                            <p className="news-item__content-script">
                                Kỷ niệm sinh nhật 8 tuổi, YODY tổ chức chương trình tri ân lớn dành tặng đến tất cả
                                khách hàng. Những sành điệu dưới đây nhé.
                            </p>
                            <div className="news-item__content-footer">
                                <div className="news-item-author">Yody</div>
                                <div className="news-item-date">01/04/2022</div>
                            </div>
                        </div>
                    </div>
                    <Link to="/news/1" className="btn-more col l-3  m-12 c-12">
                        Xem thêm{' '}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default News;
