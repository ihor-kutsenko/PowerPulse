import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Required field!'),
  password: Yup.string()
    .min(6, 'Must contain minimum 6 symbols!')
    .required('Required field!'),
});

export default signInSchema;
