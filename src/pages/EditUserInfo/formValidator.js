import * as Yup from 'yup';

export const nameSchema = Yup.object().shape({
  name: Yup.string().required('* Informe seu nome!'),
});

export const emailSchema = Yup.object().shape({
  oldEmail: Yup.string()
    .required('* Informe seu email!')
    .email('* Informe um e-mail válido!'),
  newEmail: Yup.string()
    .required('* Informe seu novo e-mail!')
    .email('* Informe um e-mail válido!'),
});

export const passwordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('* Informe a senha antiga!')
    .min(6, '* Senha inválida!'),
  newPassword: Yup.string()
    .required('* Informe a senha nova!')
    .min(6, '* Senha inválida!'),
  confirmPassword: Yup.string()
    .required('* Informe a confirmação da nova senha!')
    .oneOf([Yup.ref('newPassword'), null], 'Senhas estão diferentes!'),
});
