import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import EditUserInfo from './pages/EditUserInfo';
import Home from './pages/Home';
import PetInfo from './pages/PetInfo';
import Presentation from './pages/Presentation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import { colors } from './styles/themes';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerUser() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{ backgroundColor: colors.primary }}
      drawerContentOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: 'transparent',
        inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ title: 'Perfil' }}
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
