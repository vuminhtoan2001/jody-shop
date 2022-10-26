import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="grid wide">
                <div className="footer-top row">
                    <div className="col l-4 m-12 c-12">
                        <a href className="logo">
                            <img
                                src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/logo_footer.png?1647413540824"
                                alt=""
                            />
                        </a>
                        <p className="footer-motto">
                            “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình” là sứ
                            mệnh, là triết lý, chiến lược.. luôn cùng YODY tiến bước”
                        </p>
                        <h4 className="footer__title">đăng ký nhận thông tin</h4>
                        <div className="footer__form">
                            <form className="subcribe-form row">
                                <input
                                    type="text"
                                    className="subcribe-form__input col l-8 m-6 c-8"
                                    placeholder="Nhập thông tin đăng ký của bạn"
                                />
                                <button className="subcribe-form__btn col l-4 m-2 c-4">Đăng ký</button>
                            </form>
                        </div>
                        <div className="footer-social">
                            <a href className="footer-social__link">
                                <img
                                    src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_1.png?1647413540824"
                                    alt=" "
                                />
                            </a>
                            <a href className="footer-social__link">
                                <img
                                    src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_2.png?1647413540824"
                                    alt=" "
                                />
                            </a>
                            <a href className="footer-social__link">
                                <img
                                    src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_3.png?1647413540824"
                                    alt=" "
                                />
                            </a>
                            <a href className="footer-social__link">
                                <img
                                    src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_4.png?1647413540824"
                                    alt=" "
                                />
                            </a>
                            <a href className="footer-social__link">
                                <img
                                    src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_5.png?1647413540824"
                                    alt=" "
                                />
                            </a>
                            <a href className="footer-social__link">
                                <img
                                    src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_6.png?1647413540824"
                                    alt=" "
                                />
                            </a>
                            <a href className="footer-social__link">
                                <img
                                    src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_7.png?1647413540824"
                                    alt=" "
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col l-2 m-3 c-5">
                        <h4 className="footer__title">về yody</h4>
                        <ul className="footer__list-menu">
                            <li className="footer__item-menu">
                                <a href>Giới thiệu</a>
                            </li>
                            <li className="footer__item-menu">
                                <a href>Liên hệ</a>
                            </li>
                            <li className="footer__item-menu">
                                <a href>Tuyển dụng</a>
                            </li>
                            <li className="footer__item-menu">
                                <a href>Tin tức</a>
                            </li>
                            <li className="footer__item-menu">
                                <a href>Hệ thống cửa hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2 m-4 c-6">
                        <h4 className="footer__title">Hỗ trợ khách hàng</h4>
                        <ul className="footer__list-menu">
                            <li className="footer__item-menu">
                                <a href>Hướng dẫn chọn size</a>
                            </li>
                            <li className="footer__item-menu">
                                <a href>Chính sách khách hàng thân thiết</a>
                            </li>
                            <li className="footer__item-menu">
                                <a href>Chính sách đổi trả</a>
                            </li>
                            <li className="footer__item-menu">
                                <a href>Chính sách bảo mật</a>
                            </li>
                            <li className="footer__item-menu">
                                <a href>Thanh toán, giao nhận</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-4 m-5 c-12 footer_company">
                        <h4 className="footer__title">Công ty cổ phần thời trang hudi</h4>
                        <ul className="footer__list-menu">
                            <li className="footer__item-menu row">
                                <div className="col l-2 m-2 c-2">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/map.svg?1647413540824"
                                        alt=""
                                        className="footer__item-menu-img"
                                    />
                                </div>
                                <div className="col l-10 m-10 c-10">
                                    <div className="footer__item-menu-text">
                                        Công ty cổ phần Thời trang YODY Mã số thuế: 0801206940
                                    </div>
                                    <div className="footer__item-menu-text">
                                        Địa chỉ: Đường An Định - Phường Việt Hoa - Thành phố Hải Dương - Hải Dương
                                    </div>
                                </div>
                            </li>
                            <li className="footer__item-menu row">
                                <div className="col l-2 m-2 c-2">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/phone.svg?1647413540824"
                                        alt=""
                                        className="footer__item-menu-img"
                                    />
                                </div>
                                <div className="col l-10 m-10 c-10">
                                    <a href className="footer__item-menu-text">
                                        Liên hệ đặt hàng: 024 730 56665
                                    </a>
                                    <a href className="footer__item-menu-text">
                                        Thắc mắc đơn hàng: 024 730 16661
                                    </a>
                                    <a href className="footer__item-menu-text">
                                        Góp ý khiếu nại: 1800 2086
                                    </a>
                                </div>
                            </li>
                            <li className="footer__item-menu row">
                                <div className="col l-2 m-2 c-2">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/email.svg?1647413540824"
                                        alt=""
                                        className="footer__item-menu-img"
                                    />
                                </div>
                                <div className="col l-10 m-10 c-10">
                                    <a href className="footer__item-menu-text">
                                        Email: chamsockhachhang@yody.vn
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <a href className="bct">
                            <img
                                src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/logo_bct.png?1647413540824"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="footer-copy-right">
                    @ Bản quyền thuộc về
                    <a href>Minhtoan.vn</a>
                    All right reserved
                </div>
            </div>
        </footer>
        // <button className="back-to-top" onclick="backToTop()">⇧</button>
    );
}

export default Footer;
