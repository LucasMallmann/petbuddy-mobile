import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import {
  signInSuccess,
  signInRequest,
  signFailure,
  sendEmailSuccess,
  sendEmailFailure,
  openModalRequest,
} from './actions';

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
      yield put(
        openModalRequest(
          'wrong',
          'Usuário não encontrado! Verifique seus dados.'
        )
      );
    } else {
      yield put(
        openModalRequest('wrong', 'Verifique sua conexão e tente mais tarde.')
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

    if (error === 'User already exists') {
      yield put(openModalRequest('wrong', 'E-mail já cadastrado.'));
    } else {
      yield put(
        openModalRequest('wrong', 'Verifique sua conexão e tente mais tarde.')
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

export function* sendEmail({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, '/forgot-password', { email });

    yield put(sendEmailSuccess());

    yield put(
      openModalRequest(
        'success',
        'Verifique sua caixa de e-mail para continuar esta etapa.'
      )
    );
  } catch (err) {
    const { error } = err.response.data;

    yield put(sendEmailFailure());

    if (error === 'User not found') {
      yield put(
        openModalRequest('wrong', 'Usuário não tem cadastro no sistema.')
      );
    } else {
      yield put(
        openModalRequest('wrong', 'Verifique sua conexão e tente mais tarde.')
      );
    }
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SEND_EMAIL_REQUEST', sendEmail),
]);
