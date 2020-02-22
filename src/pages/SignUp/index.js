import React, { useRef } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import BackButton from '~/components/BackButton';
import Input from '~/components/Input';

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
                <Input
                  label="Nome *"
                  autoCapitalize="words"
                  returnKeyType="next"
                  onSubmitEditing={() => emailRef.current.focus()}
                />
                <Input
                  label="E-mail *"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  ref={emailRef}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                />
                <Input
                  label="Senha *"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  ref={passwordRef}
                  returnKeyType="send"
                  onSubmitEditing={() => {}}
                />
                <ViewButtonSignIn>
                  <ButtonSignIn title="cadastrar" onPress={() => {}} />
                </ViewButtonSignIn>
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
