import React, { useState, forwardRef } from 'react';

import PropTypes from 'prop-types';

import { colors } from '~/styles/themes';

import { Container, InputForm, ButtonIcon, IconCustom } from './styles';

function Input({ name, label, keyboardType, iconPass, ...rest }, ref) {
  const [visible, setVisible] = useState(true);

  return (
    <Container>
      <InputForm
        {...rest}
        ref={ref}
        label={label}
        keyboardType={keyboardType}
        tintColor={colors.primary}
        baseColor={colors.darck_soft}
        fontSize={16}
        labelFontSize={16}
        secureTextEntry={iconPass ? visible : false}
        renderRightAccessory={() => {
          if (iconPass) {
            return (
              <ButtonIcon onPress={() => setVisible(!visible)}>
                {visible ? (
                  <IconCustom name="visibility" size={22} />
                ) : (
                  <IconCustom name="visibility-off" size={22} />
                )}
              </ButtonIcon>
            );
          }
        }}
      />
    </Container>
  );
}

export default forwardRef(Input);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  iconPass: PropTypes.bool,
};

Input.defaultProps = {
  keyboardType: 'default',
  iconPass: false,
};
