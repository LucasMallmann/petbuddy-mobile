import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  Scroll,
  Container,
  ViewTop,
  Logo,
  ViewTitle,
  Title,
  ViewMiddle,
  PeopleImage,
  ViewBottom,
  ViewTitleBottom,
  TitleBottom,
  ButtonPress,
  ViewSignIn,
  TitleSign,
  ButtonSignIn,
  TitleSignIn,
} from './styles';

export default function Presentation() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Scroll>
        <Container>
          <ViewTop>
            <Logo />

            <ViewTitle>
              <Title>Bem-vindo</Title>
              <Title>ao petbuddy App</Title>
            </ViewTitle>
          </ViewTop>
          <ViewMiddle>
            <PeopleImage />
          </ViewMiddle>
          <ViewBottom>
            <ViewTitleBottom>
              <TitleBottom>Lugar ideal para</TitleBottom>
              <TitleBottom>encontrar novos pets</TitleBottom>
            </ViewTitleBottom>
            <ButtonPress
              title="cadastrar"
              onPress={() => navigation.navigate('SignUp')}
            />
            <ViewSignIn>
              <TitleSign>Já tem conta?</TitleSign>
              <ButtonSignIn onPress={() => navigation.navigate('SignIn')}>
                <TitleSignIn>Entre aqui!</TitleSignIn>
              </ButtonSignIn>
            </ViewSignIn>
          </ViewBottom>
        </Container>
      </Scroll>
    </SafeAreaView>
  );
}
