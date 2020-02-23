import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import Routes from './routes';
import { setNavigator } from './services/navigation';
import { store, persistor } from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={setNavigator}>
          <StatusBar barStyle="light-content" color="#FFF" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
