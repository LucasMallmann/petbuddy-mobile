import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

export default function Home() {
  const dispatch = useDispatch();

  function signOutFunc() {
    dispatch(signOut());
  }

  return (
    <SafeAreaView>
      <Button title="Sair" onPress={signOutFunc} />
    </SafeAreaView>
  );
}
