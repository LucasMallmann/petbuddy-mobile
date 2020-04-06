import { Platform } from 'react-native';

import styled from 'styled-components/native';

import Button from '~/components/Button';
import { colors, fontFamilies } from '~/styles/themes';
import { heightPercentageToDP } from '~/styles/themes/responsive';

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
    justifyContent: 'center',
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
`;

export const ViewTop = styled.View`
  height: ${heightPercentageToDP('13,39%')}px;
  justify-content: flex-end;
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

export const ViewButtonSendEmail = styled.View`
  margin: 30px 0;
`;

export const ButtonSendEmail = styled(Button)``;
