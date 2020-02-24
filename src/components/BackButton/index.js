import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { Container, ButtonPress } from './styles';

export default function BackButton({ press, color, ...rest }) {
  return (
    <Container {...rest}>
      <ButtonPress onPress={press}>
        <Icon name="keyboard-arrow-left" size={40} color={color || '#fff'} />
      </ButtonPress>
    </Container>
  );
}

BackButton.propTypes = {
  press: PropTypes.func.isRequired,
  color: PropTypes.string,
};

BackButton.defaultProps = {
  color: null,
};
