import Icon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

import { colors, fontFamilies } from '~/styles/themes';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  background: ${colors.white};
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const ViewIconSearch = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const IconSearch = styled(Icon).attrs({
  name: 'search',
  size: 22,
  color: colors.gray_light,
})``;

export const Input = styled.TextInput.attrs({
  placeholder: 'Bucar pet para adotar',
  placeholderTextColor: colors.gray_soft,
})`
  flex: 1;
  height: 100%;
  font-size: 14px;
  font-family: ${fontFamilies.medium};
`;
