import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import Input from '~/components/Input';
import { formReducer } from '~/hooks';
import { formValidateSignUp } from '~/FormValidation';
import * as userService from '~/services/userService';

import './SignUp.scss';

function SignUp() {
    const [formData, dispatch] = useReducer(formReducer, {});
    const [formErrors, setFormErrors] = useState();
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        document.title = 'Đăng ký';
    }, []);

    useEffect(() => {
        if (submitting) {
            setFormErrors(formValidateSignUp(formData));
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
        const users = await userService.getUsers();
        const foundUser = users.find((user) => user.email === formData.email);
        if (foundUser) {
            setFormErrors({
                email: 'Tài khoản Email này đã tồn tại!',
            });
        } else {
            const response = await userService.createUser(formData);
            console.log(response.status);
            if (response.status === 201) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Đăng ký thành công',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!submitting) {
            setFormErrors(formValidateSignUp(formData));
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
                <h1 className="form-login__title col l-12 m-12 c-12">Đăng ký</h1>
                <form onSubmit={handleSubmit} className="customer-login col l-12 m-12 c-12" id="form-register">
                    <Input
                        name="name"
                        label="Họ và tên"
                        handleChange={handleChange}
                        error={formErrors && formErrors.name}
                    />
                    <Input
                        name="phone"
                        label="Số điện thoại"
                        handleChange={handleChange}
                        error={formErrors && formErrors.phone}
                    />
                    <Input
                        name="email"
                        label="Địa chỉ email"
                        handleChange={handleChange}
                        error={formErrors && formErrors.email}
                    />
                    <Input
                        name="password"
                        label="Mật khẩu"
                        handleChange={handleChange}
                        error={formErrors && formErrors.password}
                    />
                    <Input
                        name="confirmPassword"
                        label="Nhập lại mật khẩu"
                        handleChange={handleChange}
                        error={formErrors && formErrors.confirmPassword}
                    />
                    <button className="btn-more" style={{ width: '100%', fontWeight: 600 }} type="submit">
                        Đăng ký
                    </button>
                </form>
                <div className="form-login__forgot col l-12 m-12 c-12">
                    <a href>Quên mật khẩu?</a>
                    <Link to="/login">Đã có tài khoản</Link>
                </div>
            </div>
        </div>
        // end
    );
}

export default SignUp;
