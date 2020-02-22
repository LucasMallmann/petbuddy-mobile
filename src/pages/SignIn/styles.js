import { Platform } from 'react-native';

import styled from 'styled-components/native';

import Button from '~/components/Button';
import { colors, fontFamilies } from '~/styles/themes';

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
  showsVerticalScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  padding: 40px;
  margin-top: 80px;
  background: ${colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ViewTop = styled.View`
  height: 120px;
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

export const TitleSignUp = styled.Text`
  color: ${colors.green};
  font-size: 16px;
  font-family: ${fontFamilies.medium};
  margin-left: 5px;
`;
