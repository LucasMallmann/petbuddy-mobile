import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { ButtonPress } from './styles';

export default function BackButton({ press }) {
  return (
    <ButtonPress onPress={press}>
      <Icon name="keyboard-arrow-left" size={40} color="#fff" />
    </ButtonPress>
  );
}

BackButton.propTypes = {
  press: PropTypes.func.isRequired,
};
