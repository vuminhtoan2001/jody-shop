const formValidateSignIn = (formValues) => {
    let errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!formValues.email) {
        errors.email = 'Trường này không được để trống!';
    } else if (!regexEmail.test(formValues.email.trim())) {
        errors.email = 'Địa chỉ email không hợp lệ!';
    }

    if (!formValues.password) {
        errors.password = 'Trường này không được để trống!';
    }

    return errors;
};
const formValidateSignUp = (formValues) => {
    let errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formValues.name) {
        errors.name = 'Trường này không được để trống!';
    }

    if (!formValues.email) {
        errors.email = 'Trường này không được để trống!';
    } else if (!regexEmail.test(formValues.email.trim())) {
        errors.email = 'Địa chỉ email không hợp lệ!';
    }

    if (!formValues.phone) {
        errors.phone = 'Trường này không được để trống!';
    } else if (!formValues.phone.trim().match(regexPhone)) {
        errors.phone = 'Số điện thoại không hợp lệ!';
    }

    if (!formValues.password) {
        errors.password = 'Trường này không được để trống!';
    }

    if (!formValues.confirmPassword) {
        errors.confirmPassword = 'Trường này không được để trống!';
    } else if (!(formValues.confirmPassword === formValues.password)) {
        errors.confirmPassword = 'Mật khẩu nhập lại không giống!';
    }

    return errors;
};
const formValidateCheckout = (formValues) => {
    let errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formValues.name) {
        errors.name = 'Trường này không được để trống!';
    }

    if (!formValues.email) {
        errors.email = 'Trường này không được để trống!';
    } else if (!regexEmail.test(formValues.email.trim())) {
        errors.email = 'Địa chỉ email không hợp lệ!';
    }

    if (!formValues.phone) {
        errors.phone = 'Trường này không được để trống!';
    } else if (!formValues.phone.trim().match(regexPhone)) {
        errors.phone = 'Số điện thoại không hợp lệ!';
    }

    if (!formValues.address) {
        errors.address = 'Trường này không được để trống!';
    }

    if (!formValues.provinces) {
        errors.province = 'Trường này không được để trống!';
    }

    if (!formValues.district) {
        errors.district = 'Trường này không được để trống!';
    }

    if (!formValues.ward) {
        errors.ward = 'Trường này không được để trống!';
    }

    if (!formValues.paymentMethod) {
        errors.paymentMethod = 'Trường thanh toán này không được để trống!';
    }

    return errors;
};

export { formValidateSignIn, formValidateSignUp, formValidateCheckout };
