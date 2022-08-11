import { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import Input from '~/components/Input';
import BlogSection from '~/components/BlogSection';
import { formReducer } from '~/hooks';
import { formValidateCustomer } from '~/FormValidation';
import * as customerService from '~/services/customerService';

import './NewsDetail.scss';

function NewsDetail() {
    const formDataInitial = {
        name: '',
        email: '',
        phone: '',
    };
    const [formData, dispatch] = useReducer(formReducer, formDataInitial);
    const [formErrors, setFormErrors] = useState();
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        document.title = 'Lịch nghỉ 10/3 thế nào? Mặc gì đi chơi Giỗ tổ Hùng Vương';
    }, []);

    useEffect(() => {
        if (submitting) {
            setFormErrors(formValidateCustomer(formData));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    const handleChange = (event) => {
        dispatch({
            name: event.target.name,
            value: event.target.value,
        });
    };

    const validValuesForm = () => {
        return Object.keys(formErrors).length === 0 ? true : false;
    };

    const submitForm = async () => {
        const users = await customerService.getCustomers();
        const foundUser = users.find((user) => user.email === formData.email);
        if (foundUser) {
            setFormErrors({
                email: 'Tài khoản Email này đã tồn tại!',
            });
        } else {
            const response = await customerService.createCustomer(formData);
            if (response.status === 201) {
                Swal.fire({
                    position: 'top-right',
                    icon: 'success',
                    title: 'Đăng ký thành công',
                    showConfirmButton: false,
                    timer: 1500,
                });
                dispatch({
                    reset: true,
                    initialState: formDataInitial,
                });
                setFormErrors({ err: false });
                setSubmitting(false);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!submitting) {
            setFormErrors(formValidateCustomer(formData));
            setSubmitting(true);
            if (validValuesForm()) {
                submitForm();
            }
        } else {
            if (validValuesForm()) {
                submitForm();
            }
        }
    };

    return (
        <>
            <div className="container-news">
                <div className="grid wide news-detail">
                    <div className="row">
                        <div className="news-detail__left col l-8 m-8 c-12">
                            <img
                                src="https://bizweb.dktcdn.net/100/438/408/articles/nghi-le-10-3-mac-gi.jpg?v=1649305840810"
                                alt=""
                                className="news-detail__img-main"
                            />
                            <div className="title-path-link inline">
                                <ul className="title-path-link__list">
                                    <li className="title-path-link__item inline">
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li className="title-path-link__item inline">
                                        <Link to="/news">Yody news</Link>
                                    </li>
                                </ul>
                            </div>
                            <h1 className="news-detail__title">
                                Lịch nghỉ 10/3 thế nào? Mặc gì đi chơi Giỗ tổ Hùng Vương
                            </h1>
                            <div className="time-post">
                                <div className="news-item-author">Yody</div>
                                <div className="news-item-date">01/04/2022</div>
                            </div>
                            <div className="news-detail__content">
                                <div className="table-of-content">
                                    <span className="table-of-content__title">Mục lục</span>
                                    <ol>
                                        <li>
                                            <a href>1. Lịch nghỉ Giỗ tổ Hùng Vương 10/3</a>
                                        </li>
                                        <li>
                                            <a href>2. Gợi ý đồ mặc đi chơi Giỗ tổ Hùng Vương</a>
                                            <ol>
                                                <li>
                                                    <a href>2.1 Áo phông + Quần jeans</a>
                                                </li>
                                                <li>
                                                    <a href>2.2 Sơ mi + Quần sort</a>
                                                </li>
                                                <li>
                                                    <a href>2.3 Áo polo + Quần sooc</a>
                                                </li>
                                                <li>
                                                    <a href>2.4 Váy đầm cho nàng</a>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>
                                <div className="text-advice">
                                    Lịch nghỉ 10/3 sắp đến, bạn đã có kế hoạch gì chưa? Để có vẻ ngoài thật ấn tượng hãy
                                    “bỏ túi” cho mình những “bộ cánh” sành điệu dưới đây nhé.
                                </div>
                                <h2 id="1-lich-nghi-gio-to-hung-vuong-10-3">1. Lịch nghỉ Giỗ tổ Hùng Vương 10/3</h2>
                                <p>
                                    Năm nay, do ngày nghỉ lễ Giỗ tổ Hùng Vương 2022 (10 tháng 3 âm lịch) trùng vào cuối
                                    tuần nên người lao động sẽ và kỳ nghỉ lễ sẽ kéo dài hơn.{' '}
                                </p>
                                <p>
                                    Cụ thể, ngày 10/3 âm năm 2022 rơi vào ngày Chủ nhật 10/4, theo đó, người lao động sẽ
                                    được nghỉ bù vào thứ Hai ngày 11/4/2022. Như vậy, tổng lịch nghỉ cho dịp lễ này sẽ
                                    kéo dài 3 ngày từ 9/4 đến 11/4, bao gồm cả ngày nghỉ thứ Bảy và Chủ nhật hàng tuần.
                                </p>
                                <p>
                                    <img
                                        src="https://lh6.googleusercontent.com/ckeWDREV-TiN3RgK14HIUcmuUDi5GzY9peSN4w-bjWkADmG2ybfUBlp5HyAFHYzF-EgT5m-U7aZoJ0G2ZOXnU_xCsaFmZQlnkOt8r0YwjUM3y9fld1TlkLUrb898vlq40QqT-wJ3"
                                        alt=""
                                    />
                                    <i>Lịch nghỉ 10/3 Giỗ tổ Hùng Vương</i>
                                </p>
                                <p>
                                    Lịch nghỉ giỗ tổ trên được căn cứ theo Bộ luật Lao động năm 2019, cho nên người lao
                                    động sẽ được nghỉ việc và được hưởng nguyên lương. Trường hợp, nhân sự vẫn đi làm
                                    theo thỏa thuận với cơ quan/ doanh nghiệp thì lương sẽ tính theo ít nhất 200% ngày
                                    nghỉ hằng tuần hoặc 300% ngày nghỉ lễ, tết.
                                </p>
                                <p>
                                    Đây là một trong những dịp lễ lớn trong năm, nên lịch nghỉ lễ 10/3 năm 2022 người
                                    lao động sẽ được hưởng mọi quyền lợi của ngày lễ chính thức. Nếu không phải làm cuối
                                    tuần thứ 7, chủ nhật thì bạn sẽ có tận 3 ngày nghỉ liền. Còn chần chờ gì mà không
                                    “lên đồ” ngay để có những outfit thời trang thật xinh đẹp, “quẩy” tung mọi địa điểm
                                    vui chơi trong dịp lễ này.
                                </p>
                                <h2>2. Gợi ý đồ mặc đi chơi Giỗ tổ Hùng Vương 10/3</h2>
                                <p>
                                    Với 3 ngày nghỉ lễ 10/3 âm lịch 2022, bên cạnh kế hoạch đi ăn chơi hết mình, để
                                    không phải băn khoăn: mặc gì đi chơi lễ? thì hãy xem những cách phối đồ mà YODY gợi
                                    ý cho bên dưới nhé.{' '}
                                </p>
                                <p>
                                    <img
                                        src="https://lh6.googleusercontent.com/D2hA2jL9_ch_7ouhze0yTEjVtoCcwAVnmEbEXFvhHVY_Pl6g908j26sWhXVO72jSasu73vhUs23OecA7OEAg2sePK9DyzfH8Wr6wbbODXa2CSVbrnZ7yEQwaUDKeZhKKdaG6q8HC"
                                        alt=""
                                    />
                                    <i>Trang phục mặc đi chơi dịp lễ Giỗ tổ Hùng Vương</i>
                                </p>
                                <h2>2.1 Áo phông + Quần jeans</h2>
                                <p>
                                    Set áo phông và quần jeans cùng giày thể thao hay sandal là outfit tuyệt vời mang
                                    đến sự năng động cho bạn trong những ngày nghỉ lễ Giỗ tổ Hùng Vương 2022. Đây là
                                    cách phối đơn giản, không tốn quá nhiều thời gian nhưng đẹp và thoải mái khi mặc.
                                </p>
                                <p>
                                    <img
                                        src="https://lh4.googleusercontent.com/4BgUs388f51Q7A_bgpklgjLgEhNHLxQMVOI54SJJdxyMEOcwlPz31aZJLczdhrJHd5TaUyJU2lUEtf0NrTh2a_oWMWrgKtWHhvdadG-SlQBv_Idu_S7Nl9Zs-BR2vjxdAQj1tb5F"
                                        alt=""
                                    />
                                    <i>Áo phông và quần jeans thích hợp mặc đi chơi lễ 10 tháng 3</i>
                                </p>
                                <p>
                                    10/3 sẽ là dịp nghỉ thư giãn tuyệt vời sau những khoảng thời gian đi làm căng thẳng.
                                    Bạn có thể tận hưởng những chuyến đi chơi ngắn ngày. Với việc vận động nhiều thì áo
                                    phông và quần jeans là lựa chọn an toàn nhất, dễ phối và tạo được cảm giác thoải mái
                                    trong suốt quá trình vui chơi.
                                </p>
                            </div>
                        </div>
                        <div className="news-detail__right col l-4 m-4 c-12">
                            <div className="news-prominent quantam">
                                <div className="news-prominent__title">Tin nổi bật</div>
                                <ul className="news-prominent__list">
                                    <li className="news-prominent__item">
                                        <a href className="news-prominent__item-img-link">
                                            <img
                                                src="https://bizweb.sapocdn.net/thumb/medium/100/438/408/articles/ra-mat-website-yody-vn.png?v=1638433775493"
                                                alt=""
                                            />
                                        </a>
                                        <div className="news-prominent__item-content">
                                            <a href className="type-of-new">
                                                Tin hot
                                            </a>
                                            <a className="news-item__content-title" href>
                                                YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                            </a>
                                        </div>
                                    </li>
                                    <li className="news-prominent__item">
                                        <a href className="news-prominent__item-img-link">
                                            <img
                                                src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/articles/quan-short-nam-ha-noi-result.jpg?v=1648171104963"
                                                alt=""
                                            />
                                        </a>
                                        <div className="news-prominent__item-content">
                                            <a href className="type-of-new">
                                                Tin hot
                                            </a>
                                            <a className="news-item__content-title" href>
                                                YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                            </a>
                                        </div>
                                    </li>
                                    <li className="news-prominent__item">
                                        <a href className="news-prominent__item-img-link">
                                            <img
                                                src="https://bizweb.sapocdn.net/thumb/medium/100/438/408/articles/ra-mat-website-yody-vn.png?v=1638433775493"
                                                alt=""
                                            />
                                        </a>
                                        <div className="news-prominent__item-content">
                                            <a href className="type-of-new">
                                                Tin hot
                                            </a>
                                            <a className="news-item__content-title" href>
                                                YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                            </a>
                                        </div>
                                    </li>
                                    <li className="news-prominent__item">
                                        <a href className="news-prominent__item-img-link">
                                            <img
                                                src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/articles/he-thong-cua-hang2-ndk08838-yody-vn.jpg?v=1648089885727"
                                                alt=""
                                            />
                                        </a>
                                        <div className="news-prominent__item-content">
                                            <a href className="type-of-new">
                                                Tin hot
                                            </a>
                                            <a className="news-item__content-title" href>
                                                YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                            </a>
                                        </div>
                                    </li>
                                    <li className="news-prominent__item">
                                        <a href className="news-prominent__item-img-link">
                                            <img
                                                src="https://bizweb.sapocdn.net/thumb/medium/100/438/408/articles/ra-mat-website-yody-vn.png?v=1638433775493"
                                                alt=""
                                            />
                                        </a>
                                        <div className="news-prominent__item-content">
                                            <a href className="type-of-new">
                                                Tin hot
                                            </a>
                                            <a className="news-item__content-title" href>
                                                YODY ra mắt website mới thân thiện, tối ưu trải nghiệm khách hàng
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <form onSubmit={handleSubmit} className="form-signup-news row">
                                <div className="form-signup-news__title col l-12">Đăng ký nhận tin</div>
                                <Input
                                    className="col l-12 m-12 c-12"
                                    name="name"
                                    label="Họ và tên khách hàng"
                                    value={formData.name || ''}
                                    handleChange={handleChange}
                                    error={formErrors && formErrors.name}
                                />
                                <Input
                                    className="col l-12 m-12 c-12"
                                    name="phone"
                                    label="Số điện thoại liên hệ"
                                    value={formData.phone || ''}
                                    handleChange={handleChange}
                                    error={formErrors && formErrors.phone}
                                />
                                <Input
                                    className="col l-12 m-12 c-12"
                                    name="email"
                                    label="Email nhận thông tin"
                                    value={formData.email || ''}
                                    handleChange={handleChange}
                                    error={formErrors && formErrors.email}
                                />
                                <div className="form-signup__btn row">
                                    <button className="btn-more col l-12 m-12 c-12" style={{ fontWeight: 600 }}>
                                        Gửi thông tin
                                    </button>
                                </div>
                            </form>
                            <div className="news-detail__right-banner">
                                <a href>
                                    <img
                                        src="https://bizweb.sapocdn.net/100/438/408/themes/856914/assets/article_banner_1.jpg?1649408474442"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="news-detail__right-banner">
                                <a href>
                                    <img
                                        src="https://bizweb.sapocdn.net/100/438/408/themes/856914/assets/article_banner_2.jpg?1649408474442"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-relate">
                <div className="main__section-blog">
                    <BlogSection blogTitle="Tin tức liên quan" />
                </div>
            </div>
        </>
    );
}

export default NewsDetail;
