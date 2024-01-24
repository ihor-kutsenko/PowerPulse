import * as yup from 'yup';

const signInSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Required field!'),
  password: yup
    .string()
    .min(6, 'Must contain minimum 6 symbols!')
    .required('Required field!'),
});

export default signInSchema;
