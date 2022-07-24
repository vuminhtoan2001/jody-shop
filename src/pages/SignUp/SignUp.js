import { useEffect } from 'react';

import Form from '~/components/Form';
import Input from '~/components/Input';
import { Link } from 'react-router-dom';

import './SignUp.scss';

function SignUp() {
    useEffect(() => {
        document.title = 'Đăng ký';
    }, []);
    return (
        <div className="grid page-account">
            <div className="container-account form-login row">
                <h1 className="form-login__title col l-12 m-12 c-12">Đăng ký</h1>
                <Form className="customer-login col l-12 m-12 c-12" id="form-register">
                    <Input name="fullname" label="Họ và tên" />
                    <Input name="phone" label="Số điện thoại" />
                    <Input name="email" label="Địa chỉ email" />
                    <Input name="password" label="Mật khẩu" />
                    <Input name="password_confirmation" label="Nhập lại mật khẩu" />
                    <button className="btn-more" style={{ width: '100%', fontWeight: 600 }}>
                        Đăng ký
                    </button>
                </Form>
                <div className="form-login__forgot col l-12 m-12 c-12">
                    <a href>Quên mật khẩu?</a>
                    <Link to="/log-in">Đã có tài khoản</Link>
                </div>
            </div>
        </div>
        // end
    );
}

export default SignUp;
