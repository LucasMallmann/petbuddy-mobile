import React from 'react';
import { ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import { colors } from '~/styles/themes';

import { Container, ButtonPress, Title } from './styles';

export default function Button({ onPress, title, loading }) {
  return (
    <Container>
      <ButtonPress onPress={onPress}>
        {loading ? (
          <ActivityIndicator color={colors.white} size="small" />
        ) : (
          <Title>{title}</Title>
        )}
      </ButtonPress>
    </Container>
  );
}

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  onPress: null,
  loading: false,
};
