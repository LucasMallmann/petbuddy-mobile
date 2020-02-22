import React from 'react';

import PropTypes from 'prop-types';

import { Container, ButtonPress, Title } from './styles';

export default function Button({ title, onPress }) {
  return (
    <Container>
      <ButtonPress onPress={onPress}>
        <Title>{title}</Title>
      </ButtonPress>
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: null,
};
