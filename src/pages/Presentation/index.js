import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

import { colors } from '~/styles/themes';

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

  useEffect(() => {
    Icon.loadFont();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
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
    </>
  );
}
