import React, { useState } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import Search from '~/components/Search';
import { signOut } from '~/store/modules/auth/actions';
import { colors } from '~/styles/themes';

import {
  KeyboardAvoidingView,
  SafeAreaView,
  Header,
  ViewLeft,
  ButtonDrawer,
  IconDrawer,
  ViewMiddle,
  TextLocation,
  ViewLocation,
  IconLocation,
  TextLocationName,
  ViewRight,
  ButtonPerfil,
  Avatar,
  Container,
  ViewListType,
  ListTypes,
  ButtonType,
  ViewType,
  SvgType,
  TitleType,
  ListPets,
  ViewPet,
  ImagePet,
  ViewRightPet,
  ViewTopPet,
  NamePet,
  IconSex,
  BreedPet,
  YearsPet,
  DistancePet,
} from './styles';

export default function Home() {
  const [types] = useState([
    {
      id: '1',
      name: 'Cão',
      active: true,
    },
    {
      id: '2',
      name: 'Gato',
      active: false,
    },
  ]);

  const [pets] = useState([
    {
      id: '1',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
      name: 'Alfredo',
      breed: 'Golden retriver',
      years: '2',
      distance: '3,8',
      male: true,
    },
    {
      id: '2',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
      name: 'Nina',
      breed: 'Pug',
      years: '5',
      distance: '1,8',
      male: false,
    },
    {
      id: '3',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
      name: 'Bob',
      breed: 'Labrador',
      years: '2',
      distance: '1,2',
      male: true,
    },
    {
      id: '4',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
      name: 'Alfredo',
      breed: 'Golden retriver',
      years: '2',
      distance: '3,8',
      male: true,
    },
    {
      id: '5',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
      name: 'Nina',
      breed: 'Pug',
      years: '5',
      distance: '1,8',
      male: false,
    },
    {
      id: '6',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
      name: 'Bob',
      breed: 'Labrador',
      years: '2',
      distance: '1,2',
      male: true,
    },
  ]);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView>
            <Header>
              <ViewLeft>
                <ButtonDrawer>
                  <IconDrawer />
                </ButtonDrawer>
              </ViewLeft>

              <ViewMiddle>
                <TextLocation>Localicação</TextLocation>
                <ViewLocation>
                  <IconLocation />
                  <TextLocationName>Piedade, Jaboatão</TextLocationName>
                </ViewLocation>
              </ViewMiddle>

              <ViewRight>
                <ButtonPerfil onPress={() => dispatch(signOut())}>
                  <Avatar
                    source={{
                      uri:
                        'https://api.adorable.io/avatars/50/abott@adorable.png',
                    }}
                  />
                </ButtonPerfil>
              </ViewRight>
            </Header>
            <Container>
              <Search />

              <ViewListType>
                <ListTypes
                  data={types}
                  renderItem={({ item }) => (
                    <ButtonType>
                      <ViewType active={item.active}>
                        <SvgType active={item.active} />
                      </ViewType>
                      <TitleType active={item.active}>{item.name}</TitleType>
                    </ButtonType>
                  )}
                  keyExtractor={item => item.id}
                />
              </ViewListType>

              <ListPets
                data={pets}
                renderItem={({ item }) => (
                  <ViewPet
                    onPress={() =>
                      navigation.navigate('PetInfo', { data: item })
                    }
                  >
                    <ImagePet
                      source={{
                        uri: item.url,
                      }}
                    />

                    <ViewRightPet>
                      <ViewTopPet>
                        <NamePet>{item.name}</NamePet>
                        <IconSex male={item.male} />
                      </ViewTopPet>

                      <BreedPet>{item.breed}</BreedPet>
                      <YearsPet>{item.years} ano(s) de idade</YearsPet>
                      <DistancePet>Distância: {item.distance} km</DistancePet>
                    </ViewRightPet>
                  </ViewPet>
                )}
              />
            </Container>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
