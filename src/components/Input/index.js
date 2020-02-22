import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

import { colors } from '~/styles/themes';

import { Container, InputForm } from './styles';

function Input({ name, label, keyboardType, ...rest }, ref) {
  return (
    <Container>
      <InputForm
        {...rest}
        ref={ref}
        label={label}
        keyboardType={keyboardType}
        tintColor={colors.primary}
        baseColor={colors.gray}
        fontSize={16}
        labelFontSize={16}
      />
    </Container>
  );
}

export default forwardRef(Input);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
};

Input.defaultProps = {
  keyboardType: 'default',
};
