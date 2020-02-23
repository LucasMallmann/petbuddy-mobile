import { Alert } from 'react-native';

import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signInRequest, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    const { error } = err.response.data;

    if (error === 'User not found' || error === 'Password does not match') {
      Alert.alert(
        'Falha na autenticação',
        'Usuário não encontrado. Verifique seus dados!'
      );
    } else {
      Alert.alert(
        'Falha na autenticação',
        'Verifique sua conexão e tente mais tarde!'
      );
    }

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', { name, email, password });

    yield put(signInRequest(email, password));
  } catch (err) {
    const { error } = err.response.data;

    if (error === 'User already exists.') {
      Alert.alert('Falha no cadastro', 'E-mail já cadastrado!');
    } else {
      Alert.alert(
        'Falha no cadastro',
        'Verifique sua conexão e tente mais tarde!'
      );
    }

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
