import React, { useRef, useEffect } from 'react';
import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
} from 'react-native';
import { useSelector } from 'react-redux';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';

import { colors } from '~/styles/themes';

import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import { nameSchema, emailSchema, passwordSchema } from './formValidator';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Scroll,
  Container,
  ViewTop,
  Title,
  ViewButtonSignIn,
  ButtonSignIn,
} from './styles';

export default function EditUserInfo() {
  const navigation = useNavigation();
  const route = useRoute();

  const { title } = route.params;
  const { option } = route.params;

  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef(null);
  const newEmailRef = useRef(null);
  const oldPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);

  useEffect(() => {
    const backPress = () => {
      navigation.navigate('UserProfile');
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', backPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backPress);
    };
  }, [navigation]);

  function renderName() {
    return (
      <Formik
        initialValues={{ name: 'João Lucas' }}
        validationSchema={nameSchema}
        onSubmit={values => {
          Keyboard.dismiss();
          // dispatch(signUpRequest(values.name, values.email, values.password));
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
              label="Nome"
              autoCapitalize="words"
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
            <ViewButtonSignIn>
              <ButtonSignIn
                title="Salvar"
                onPress={handleSubmit}
                loading={loading}
              />
            </ViewButtonSignIn>
          </>
        )}
      </Formik>
    );
  }

  function renderEmail() {
    return (
      <Formik
        initialValues={{ oldEmail: '', newEmail: '' }}
        validationSchema={emailSchema}
        onSubmit={values => {
          Keyboard.dismiss();
          // dispatch(signUpRequest(values.name, values.email, values.password));
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
              name="oldEmail"
              onChangeText={handleChange('oldEmail')}
              onBlur={() => setFieldTouched('oldEmail')}
              value={values.oldEmail}
              touched={touched.oldEmail}
              errors={errors.oldEmail}
              label="Antigo e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => newEmailRef.current.focus()}
            />
            <Input
              type="email"
              name="newEmail"
              onChangeText={handleChange('newEmail')}
              onBlur={() => setFieldTouched('newEmail')}
              value={values.newEmail}
              touched={touched.newEmail}
              errors={errors.newEmail}
              label="Novo e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              ref={newEmailRef}
              returnKeyType="send"
              onSubmitEditing={() => handleSubmit}
            />
            <ViewButtonSignIn>
              <ButtonSignIn
                title="Salvar"
                onPress={handleSubmit}
                loading={loading}
              />
            </ViewButtonSignIn>
          </>
        )}
      </Formik>
    );
  }

  function renderPassword() {
    return (
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={passwordSchema}
        onSubmit={values => {
          Keyboard.dismiss();
          // dispatch(signUpRequest(values.name, values.email, values.password));
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
              type="password"
              name="oldPassword"
              onChangeText={handleChange('oldPassword')}
              onBlur={() => setFieldTouched('oldPassword')}
              value={values.oldPassword}
              touched={touched.oldPassword}
              errors={errors.oldPassword}
              label="Antiga senha"
              autoCapitalize="none"
              iconPass
              autoCorrect={false}
              ref={oldPasswordRef}
              returnKeyType="next"
              onSubmitEditing={() => newPasswordRef.current.focus()}
            />
            <Input
              type="password"
              name="newPassword"
              onChangeText={handleChange('newPassword')}
              onBlur={() => setFieldTouched('newPassword')}
              value={values.newPassword}
              touched={touched.newPassword}
              errors={errors.newPassword}
              label="Nova senha"
              autoCapitalize="none"
              autoCorrect={false}
              iconPass
              ref={newPasswordRef}
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
            />
            <Input
              type="password"
              name="confirmPassword"
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword')}
              value={values.confirmPassword}
              touched={touched.confirmPassword}
              errors={errors.confirmPassword}
              label="Confirmar senha"
              autoCapitalize="none"
              autoCorrect={false}
              iconPass
              ref={confirmPasswordRef}
              returnKeyType="send"
              onSubmitEditing={() => handleSubmit}
            />
            <ViewButtonSignIn>
              <ButtonSignIn
                title="Salvar"
                onPress={handleSubmit}
                loading={loading}
              />
            </ViewButtonSignIn>
          </>
        )}
      </Formik>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView>
            <BackButton press={() => navigation.navigate('UserProfile')} />
            <Container>
              <Scroll>
                <ViewTop>
                  <Title>{title}</Title>
                </ViewTop>
                {option === 1 ? renderName() : null}
                {option === 2 ? renderEmail() : null}
                {option === 3 ? renderPassword() : null}
              </Scroll>
            </Container>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
