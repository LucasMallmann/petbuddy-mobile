import React, { useState, forwardRef } from 'react';

import PropTypes from 'prop-types';

import { colors } from '~/styles/themes';

import {
  Container,
  InputForm,
  ButtonIcon,
  IconCustom,
  ErroMsg,
} from './styles';

function Input(
  {
    name,
    label,
    keyboardType,
    iconPass,
    defaultValue,
    touched,
    errors,
    ...rest
  },
  ref
) {
  const [visible, setVisible] = useState(true);

  return (
    <Container>
      <InputForm
        {...rest}
        ref={ref}
        label={label}
        keyboardType={keyboardType}
        tintColor={touched && errors ? 'red' : colors.primary}
        baseColor={touched && errors ? 'red' : colors.darck_soft}
        fontSize={16}
        labelFontSize={16}
        defaultValue={defaultValue}
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
          return <></>;
        }}
      />
      {touched && errors && <ErroMsg>{errors}</ErroMsg>}
    </Container>
  );
}

export default forwardRef(Input);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  iconPass: PropTypes.bool,
  defaultValue: PropTypes.string.isRequired,
  touched: PropTypes.bool.isRequired,
  errors: PropTypes.string,
};

Input.defaultProps = {
  keyboardType: 'default',
  iconPass: false,
  errors: null,
};
