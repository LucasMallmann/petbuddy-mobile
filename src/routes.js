import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Presentation from './pages/Presentation';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Presentation" component={Presentation} />
    </Stack.Navigator>
  );
}

export default App;
