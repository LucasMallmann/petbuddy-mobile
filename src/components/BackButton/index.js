import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { Container, ButtonPress, Title } from './styles';

export default function BackButton({ pet, press, color, ...rest }) {
  return (
    <Container pet={pet} {...rest}>
      <ButtonPress onPress={press}>
        <Icon name="keyboard-backspace" size={24} color={color || '#fff'} />
        <Title> Voltar</Title>
      </ButtonPress>
    </Container>
  );
}

BackButton.propTypes = {
  pet: PropTypes.bool,
  press: PropTypes.func.isRequired,
  color: PropTypes.string,
};

BackButton.defaultProps = {
  pet: false,
  color: null,
};
