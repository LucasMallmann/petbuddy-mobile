import { Platform } from 'react-native';

import styled from 'styled-components/native';

import Button from '~/components/Button';

import { colors, fontFamilies } from '../../styles/themes';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../styles/themes/responsive';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primary};
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  padding: 40px;
  background: ${colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-width: 1;
`;

export const ViewTop = styled.View`
  height: ${heightPercentageToDP('13,39%')}px;
  justify-content: flex-end;
  width: ${widthPercentageToDP('25%')}px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.dark_soft};
  font-family: ${fontFamilies.medium};
`;

export const ViewMiddle = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ViewButtonSignIn = styled.View`
  margin: 30px 0;
`;

export const ButtonSignIn = styled(Button)``;

export const ViewBottom = styled.View``;

export const ViewSignUp = styled.View`
  flex-direction: row;
`;

export const TitleSign = styled.Text`
  color: ${colors.gray};
  font-size: 16px;
  font-family: ${fontFamilies.medium};
`;

export const ButtonSignUp = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 10, bottom: 10, right: 10 },
})``;

export const TitleSignUp = styled.Text`
  color: ${colors.green};
  font-size: 16px;
  font-family: ${fontFamilies.medium};
  margin-left: 5px;
`;
