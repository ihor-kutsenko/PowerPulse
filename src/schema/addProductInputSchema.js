import * as Yup from 'yup';

const AddProductInputSchema = Yup.object().shape({
  amount: Yup.number()
    .positive('Amount must be a positive number')
    .required('Amount is required'),
});

export default AddProductInputSchema;
