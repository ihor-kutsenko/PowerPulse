import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short! Must be minimum 2 symbols')
    .max(32, 'Too Long! 32symbols - is maximum.')
    .required('Name is required!'),
  email: Yup.string()
    .email('Invalid email format. Here is a valid email: example@gmail.com')
    .required('Email is required!'),
  password: Yup.string()
    .min(6, 'Must contain minimum 6 symbols!')
    .max(32, 'Too Long! 32 symbols - is maximum.')
    .required('Password is required!'),
});

export default signUpSchema;
