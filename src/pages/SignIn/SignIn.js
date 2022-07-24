import { useEffect } from 'react';

import Form from '~/components/Form';
import Input from '~/components/Input';
import { Link } from 'react-router-dom';

import './SignIn.scss';

function SignIn() {
    useEffect(() => {
        document.title = 'Đăng nhập';
    }, []);
    return (
        <div className="grid page-account">
            <div className="container-account form-login row">
                <h1 className="form-login__title col l-12 m-12 c-12">Đăng nhập</h1>
                <Form className="customer-login col l-12 m-12 c-12" id="form-login">
                    <Input name="email" label="Email" />
                    <Input name="password" label="Mật khẩu" />
                    <button className="btn-more" style={{ width: '100%', fontWeight: 600 }}>
                        Đăng nhập
                    </button>
                </Form>
                <div className="form-login__forgot col l-12 m-12 c-12">
                    <a href>Quên mật khẩu?</a>
                    <Link to="/register">Đăng ký</Link>
                </div>
                <div className="form-login__social-login col l-12 m-12 c-12">
                    <p className="text-or-center">---Hoặc---</p>
                    <div className="form-login__social-login-group-icon">
                        <a className="form-login__social-login-icon" href>
                            <img src="	https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="" />
                        </a>
                        <a className="form-login__social-login-icon" href>
                            <img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // end
    );
}

export default SignIn;
