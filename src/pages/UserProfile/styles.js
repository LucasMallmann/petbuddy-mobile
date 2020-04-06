import { Platform } from 'react-native';

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
  background: ${colors.primary};
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 30px;
`;

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ContainerImage = styled.View`
  height: ${heightPercentageToDP('30%')}px;
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
  justify-content: space-around;
`;

export const EditAvatarButton = styled.TouchableOpacity``;

export const UserName = styled.Text`
  font-family: ${fontFamilies.regular};
  font-size: 22px;
  color: #fff;
`;

export const ListOptions = styled.View`
  display: flex;
  align-items: center;
`;

export const Option = styled.TouchableOpacity`
  border-bottom-width: ${props => (props.disableBorder ? '0' : '2')}px;
  border-bottom-color: #999;
  width: ${widthPercentageToDP('90%')}px;
  height: ${heightPercentageToDP('10%')}px;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

export const OptionText = styled.Text`
  font-family: ${fontFamilies.regular};
  color: ${colors.gray};
  font-size: 18px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionTitle = styled.Text`
  font-family: ${fontFamilies.medium};
  color: #000;
  font-size: 16px;
`;

export const Switcher = styled.Switch``;
