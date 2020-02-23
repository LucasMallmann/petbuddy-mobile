import React, { useEffect, useRef } from 'react';
import { TouchableWithoutFeedback, Keyboard, BackHandler } from 'react-native';

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

export default function SignIn() {
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
                <Input
                  label="E-mail *"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                />
                <Input
                  label="Senha *"
                  iconPass
                  autoCapitalize="none"
                  autoCorrect={false}
                  ref={passwordRef}
                  returnKeyType="send"
                  onSubmitEditing={() => {}}
                />
                <ViewButtonSignIn>
                  <ButtonSignIn title="entrar" onPress={() => {}} />
                </ViewButtonSignIn>
              </ViewMiddle>

              <ViewSignUp>
                <TitleSign>Não tem conta?</TitleSign>
                <ButtonSignUp onPress={() => navigation.navigate('SignUp')}>
                  <TitleSignUp>Cadastre-se aqui!</TitleSignUp>
                </ButtonSignUp>
              </ViewSignUp>
            </Scroll>
          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
