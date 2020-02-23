import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

import { colors } from '~/styles/themes';

export const Container = styled.View`
  margin-bottom: 5px;
`;

export const InputForm = styled(TextField)``;

export const ButtonIcon = styled.TouchableOpacity`
  padding-right: 10px;
`;

export const IconCustom = styled(Icon).attrs({
  color: colors.dark_soft,
})``;
