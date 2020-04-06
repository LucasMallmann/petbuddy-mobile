import React from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import Alert from '~/components/Alert';
import BackButton from '~/components/BackButton';
import Input from '~/components/Input';
import {
  sendEmailRequest,
  closeModalRequest,
} from '~/store/modules/auth/actions';
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
  ViewButtonSendEmail,
  ButtonSendEmail,
} from './styles';

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const open = useSelector(state => state.auth.open);
  const type = useSelector(state => state.auth.type);
  const description = useSelector(state => state.auth.description);
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView>
            <BackButton press={() => navigation.goBack()} />
            <Container>
              <Scroll>
                <ViewTop>
                  <Title>Esqueci minha</Title>
                  <Title>senha</Title>
                </ViewTop>

                <ViewMiddle>
                  <Formik
                    initialValues={{ email: '' }}
                    validationSchema={formValidator}
                    onSubmit={values => {
                      Keyboard.dismiss();
                      dispatch(sendEmailRequest(values.email));
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
                          returnKeyType="send"
                          onSubmitEditing={handleSubmit}
                        />
                        <ViewButtonSendEmail>
                          <ButtonSendEmail
                            title="enviar"
                            onPress={handleSubmit}
                            loading={loading}
                          />
                        </ViewButtonSendEmail>
                      </>
                    )}
                  </Formik>
                </ViewMiddle>
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
