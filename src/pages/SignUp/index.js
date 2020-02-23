import React, { useRef, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, BackHandler } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import BackButton from '~/components/BackButton';
import Input from '~/components/Input';

import formValidator from './formValidator';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Scroll,
  Container,
  ViewTop,
  Title,
  ViewMiddle,
  ViewButtonSignIn,
  ButtonSignIn,
  ViewSignUp,
  TitleSign,
  ButtonSignUp,
  TitleSignUp,
} from './styles';

export default function SignUp() {
  const navigation = useNavigation();

  const emailRef = useRef(null);
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
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <BackButton press={() => navigation.navigate('Presentation')} />
          <Container>
            <Scroll>
              <ViewTop>
                <Title>Cadastrar</Title>
                <Title>conta</Title>
              </ViewTop>

              <ViewMiddle>
                <Formik
                  initialValues={{ name: '', email: '', password: '' }}
                  validationSchema={formValidator}
                  onSubmit={values => {
                    Keyboard.dismiss();
                    console.log(values);
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
                        type="name"
                        name="name"
                        onChangeText={handleChange('name')}
                        onBlur={() => setFieldTouched('name')}
                        value={values.name}
                        touched={touched.name}
                        errors={errors.name}
                        label="Nome *"
                        autoCapitalize="words"
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current.focus()}
                      />
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
                        ref={emailRef}
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
                      <ViewButtonSignIn>
                        <ButtonSignIn
                          title="cadastrar"
                          onPress={handleSubmit}
                        />
                      </ViewButtonSignIn>
                    </>
                  )}
                </Formik>
              </ViewMiddle>

              <ViewSignUp>
                <TitleSign>Já tem conta?</TitleSign>
                <ButtonSignUp onPress={() => navigation.navigate('SignIn')}>
                  <TitleSignUp>Entre aqui!</TitleSignUp>
                </ButtonSignUp>
              </ViewSignUp>
            </Scroll>
          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
