import { Platform, StyleSheet } from 'react-native';

import styled from 'styled-components/native';

// import Button from '~/components/Button';
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
`;

export const Scroll = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 30;
`;

export const Container = styled.View`
  height: ${heightPercentageToDP('60%')}px;
`;

export const ContainerImage = styled.View`
  height: ${heightPercentageToDP('35%')}px;
  overflow: visible;
`;

export const Header = styled.ImageBackground`
  flex: 1;
`;

export const ContainerAvatar = styled.View`
  width: ${widthPercentageToDP('100%')}px;
  height: ${heightPercentageToDP('20%')}px;
  position: absolute;
  top: ${heightPercentageToDP('5%')}px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  font-family: ${fontFamilies.regular};
  font-size: ${heightPercentageToDP('3%')}px;
  color: #fff;
`;

export const ListOptions = styled.View`
  display: flex;
  align-items: center;
`;

export const Option = styled.TouchableOpacity`
  border-bottom-width: ${props => (props.disableBorder ? 0 : 2)};
  border-bottom-color: #999;
  width: ${widthPercentageToDP('90%')}px;
  height: ${heightPercentageToDP('10%')}px;
  display: flex;
  justify-content: space-around;
`;

export const OptionText = styled.Text`
  font-family: ${fontFamilies.regular};
  color: ${colors.gray};
  font-size: ${heightPercentageToDP('2.5%')}px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionTitle = styled.Text`
  font-family: ${fontFamilies.medium};
  color: #000;
  font-size: ${heightPercentageToDP('2.3%')}px;
`;

export const Switcher = styled.Switch``;
