import { object, string } from 'yup';

export default object().shape({
  email: string()
    .required('* Informe seu e-mail!')
    .email('* Informe um e-mail válido!'),
});
