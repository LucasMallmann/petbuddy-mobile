import React, { useEffect, useRef } from 'react';
import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import Alert from '~/components/Alert';
import BackButton from '~/components/BackButton';
import Input from '~/components/Input';
import { signInRequest, closeModalRequest } from '~/store/modules/auth/actions';
import { colors } from '~/styles/themes';

import formValidator from './formValidator';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Scroll,
  Container,
  ViewTop,
  Title,
  ViewMiddle,
  ViewForgotPassword,
  ButtonForgotPassword,
  TitleForgotPassword,
  ViewButtonSignIn,
  ButtonSignIn,
  ViewSignUp,
  TitleSign,
  ButtonSignUp,
  TitleSignUp,
} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const open = useSelector(state => state.auth.open);
  const type = useSelector(state => state.auth.type);
  const description = useSelector(state => state.auth.description);
  const navigation = useNavigation();

  const passwordRef = useRef(null);

  useEffect(() => {
    const backPress = () => {
      navigation.navigate('Presentation');
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', backPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backPress);
    };
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView>
            <BackButton press={() => navigation.navigate('Presentation')} />
            <Container>
              <Scroll>
                <ViewTop>
                  <Title>Bem-vindo</Title>
                  <Title>de volta!</Title>
                </ViewTop>

                <ViewMiddle>
                  <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={formValidator}
                    onSubmit={values => {
                      Keyboard.dismiss();
                      dispatch(signInRequest(values.email, values.password));
                    }}
                  >
                    {({
                      values,
                      handleChange,
                      errors,
                      setFieldTouched,
                      touched,
                      handleSubmit,
                    }) => (
                      <>
                        <Input
                          type="email"
                          name="email"
                          onChangeText={handleChange('email')}
                          onBlur={() => setFieldTouched('email')}
                          value={values.email}
                          touched={touched.email}
                          errors={errors.email}
                          label="E-mail *"
                          keyboardType="email-address"
                          autoCapitalize="none"
                          autoCorrect={false}
                          returnKeyType="next"
                          onSubmitEditing={() => passwordRef.current.focus()}
                        />
                        <Input
                          type="password"
                          name="password"
                          onChangeText={handleChange('password')}
                          onBlur={() => setFieldTouched('password')}
                          value={values.password}
                          touched={touched.password}
                          errors={errors.password}
                          label="Senha *"
                          iconPass
                          autoCapitalize="none"
                          autoCorrect={false}
                          ref={passwordRef}
                          returnKeyType="send"
                          onSubmitEditing={handleSubmit}
                        />
                        <ViewForgotPassword>
                          <ButtonForgotPassword
                            onPress={() =>
                              navigation.navigate('ForgotPassword')
                            }
                          >
                            <TitleForgotPassword>
                              Esqueceu a senha?
                            </TitleForgotPassword>
                          </ButtonForgotPassword>
                        </ViewForgotPassword>
                        <ViewButtonSignIn>
                          <ButtonSignIn
                            title="entrar"
                            onPress={handleSubmit}
                            loading={loading}
                          />
                        </ViewButtonSignIn>
                      </>
                    )}
                  </Formik>
                </ViewMiddle>

                <ViewSignUp>
                  <TitleSign>Não tem conta?</TitleSign>
                  <ButtonSignUp onPress={() => navigation.navigate('SignUp')}>
                    <TitleSignUp>Cadastre-se aqui!</TitleSignUp>
                  </ButtonSignUp>
                </ViewSignUp>

                <Alert
                  type={type}
                  open={open}
                  description={description}
                  onPress={() => dispatch(closeModalRequest())}
                />
              </Scroll>
            </Container>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
