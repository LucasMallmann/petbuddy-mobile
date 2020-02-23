import { object, string } from 'yup';

export default object().shape({
  name: string().required('* Informe seu nome!'),
  email: string()
    .required('* Informe seu e-mail!')
    .email('* Informe um e-mail válido!'),
  password: string()
    .min(6, '* Mínimo 6 caracteres!')
    .required('* Informe sua senha!'),
});
