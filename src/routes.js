import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Presentation from './pages/Presentation';
import SignIn from './pages/SignIn';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Presentation" component={Presentation} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default App;
