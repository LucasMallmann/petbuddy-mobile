import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import AddPet from '../pages/AddPet';
import Chats from '../pages/Chats';
import EditUserInfo from '../pages/EditUserInfo';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import MyPets from '../pages/MyPets';
import PetInfo from '../pages/PetInfo';
import Presentation from '../pages/Presentation';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserProfile from '../pages/UserProfile';
import { colors, fontFamilies } from '../styles/themes';
import {
  Container,
  Top,
  Avatar,
  ViewInfo,
  Name,
  Pets,
  Bottom,
  Logo,
  Version,
} from './styles';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <Container>
      <Top>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
        <ViewInfo>
          <Name>João Lucas</Name>
          <Pets>3 pets adicionados</Pets>
        </ViewInfo>
      </Top>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Bottom>
        <Logo />
        <Version>v1.0</Version>
      </Bottom>
    </Container>
  );
}

function DrawerUser() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: '#383838',
        activeBackgroundColor: '#E9DCFB',
        labelStyle: { fontFamily: fontFamilies.medium, fontSize: 16 },
      }}
      drawerContent={props => CustomDrawerContent(props)}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Adoção',
          drawerIcon: ({ focused }) => (
            <Icon
              name="pets"
              size={22}
              color={focused ? colors.primary : '#383838'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AddPet"
        component={AddPet}
        options={{
          title: 'Adicionar pet',
          drawerIcon: ({ focused }) => (
            <Icon
              name="add"
              size={24}
              color={focused ? colors.primary : '#383838'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyPets"
        component={MyPets}
        options={{
          title: 'Meus pets',
          drawerIcon: ({ focused }) => (
            <Icon
              name="pets"
              size={22}
              color={focused ? colors.primary : '#383838'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favoritos',
          drawerIcon: ({ focused }) => (
            <Icon
              name="favorite"
              size={22}
              color={focused ? colors.primary : '#383838'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Chats"
        component={Chats}
        options={{
          title: 'Mensagens',
          drawerIcon: ({ focused }) => (
            <Icon
              name="chat"
              size={22}
              color={focused ? colors.primary : '#383838'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: 'Perfil',
          drawerIcon: ({ focused }) => (
            <Icon
              name="person"
              size={22}
              color={focused ? colors.primary : '#383838'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function Routes() {
  const isSigned = useSelector(state => state.auth.signed);

  return (
    <>
      {isSigned ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <Stack.Screen name="Home" component={DrawerUser} />
          <Stack.Screen name="PetInfo" component={PetInfo} />
          <Stack.Screen name="EditUserInfo" component={EditUserInfo} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <Stack.Screen name="Presentation" component={Presentation} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </>
  );
}

export default Routes;
