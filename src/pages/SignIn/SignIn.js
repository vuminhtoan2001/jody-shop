import { useState, useReducer, useEffect } from 'react';
import Swal from 'sweetalert2';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Input from '~/components/Input';
import { Link } from 'react-router-dom';
import { formReducer } from '~/hooks';
import { formValidateSignIn } from '~/FormValidation';
import * as userService from '~/services/userService';

import './SignIn.scss';

function SignIn() {
    const [formData, dispatch] = useReducer(formReducer, {});
    const [formErrors, setFormErrors] = useState();
    const [submitting, setSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.title = 'Đăng nhập';
    }, []);

    useEffect(() => {
        if (submitting) {
            setFormErrors(formValidateSignIn(formData));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    const handleChange = (event) => {
        dispatch({
            name: event.target.name,
            value: event.target.value,
        });
    };

    const handleShowHidePassword = () => {
        setShowPassword(!showPassword);
    };

    const validValuesForm = () => {
        return Object.keys(formErrors).length === 0 ? true : false;
    };

    const submitForm = async () => {
        const users = await userService.getUsers();
        const foundUser = users.find((user) => user.email === formData.email);
        if (!foundUser) {
            setFormErrors({
                email: 'Tài khoản Email không đúng!',
            });
        } else {
            const match = formData.password === foundUser.password;
            if (match) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Đăng nhập thành công',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                setFormErrors({
                    password: 'Mật khẩu không chính xác!',
                });
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!submitting) {
            setFormErrors(formValidateSignIn(formData));
            setSubmitting(true);
        } else {
            console.log('submit', Object.keys(formErrors).length);
            if (validValuesForm()) {
                submitForm();
            }
            // const result = validValuesForm();
            // setFormValidation(result);
        }
    };

    return (
        <div className="grid page-account">
            <div className="container-account form-login row">
                <h1 className="form-login__title col l-12 m-12 c-12">Đăng nhập</h1>
                <form onSubmit={handleSubmit} className="customer-login col l-12 m-12 c-12" id="form-login">
                    <Input
                        name="email"
                        label="Email"
                        handleChange={handleChange}
                        error={formErrors && formErrors.email}
                    />
                    <Input
                        className="input-password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        label="Mật khẩu"
                        handleChange={handleChange}
                        error={formErrors && formErrors.password}
                        fontIcon={showPassword ? faEye : faEyeSlash}
                        handleShowHidePassword={handleShowHidePassword}
                    />
                    <button className="btn-more" style={{ width: '100%', fontWeight: 600 }}>
                        Đăng nhập
                    </button>
                </form>
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
