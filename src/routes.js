import React from 'react';
import { useSelector } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import PetInfo from './pages/PetInfo';
import Presentation from './pages/Presentation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

function Routes() {
  const isSigned = useSelector(state => state.auth.signed);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      {isSigned ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PetInfo" component={PetInfo} />
        </>
      ) : (
        <>
          <Stack.Screen name="Presentation" component={Presentation} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Routes;
