import React, { useEffect, useState } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { useNavigation, DrawerActions } from '@react-navigation/native';

import Avatar from '~/components/Avatar';
import Search from '~/components/Search';
import api from '~/services/api';
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
  const [types, setTypes] = useState([]);

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function loadTypes() {
      const response = await api.get('types');

      setTypes(response.data);
    }

    loadTypes();
  }, []);

  useEffect(() => {
    async function loadPets() {
      const response = await api.get('pets');
      const type = types.find(t => t.active === true);

      setDogs(response.data.filter(p => p.type === type.name));
    }

    loadPets();
  }, [types]);

  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView>
            <Header>
              <ViewLeft>
                <ButtonDrawer
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }
                >
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
                <ButtonPerfil
                  onPress={() => navigation.navigate('UserProfile')}
                >
                  <Avatar
                    url="https://api.adorable.io/avatars/50/abott@adorable.png"
                    size="p"
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
                    <ButtonType
                      onPress={() => {
                        const newTypes = types.map(t =>
                          t.id === item.id
                            ? { ...t, active: true }
                            : { ...t, active: false }
                        );
                        setTypes(newTypes);
                      }}
                    >
                      <ViewType active={item.active}>
                        <SvgType active={item.active} />
                      </ViewType>
                      <TitleType active={item.active}>{item.title}</TitleType>
                    </ButtonType>
                  )}
                  keyExtractor={item => String(item.id)}
                />
              </ViewListType>

              <ListPets
                data={dogs}
                keyExtractor={item => String(item.id)}
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
