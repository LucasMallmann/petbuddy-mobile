import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { Container, ButtonPress } from './styles';

export default function BackButton({ press }) {
  return (
    <Container>
      <ButtonPress onPress={press}>
        <Icon name="keyboard-arrow-left" size={40} color="#fff" />
      </ButtonPress>
    </Container>
  );
}

BackButton.propTypes = {
  press: PropTypes.func.isRequired,
};
