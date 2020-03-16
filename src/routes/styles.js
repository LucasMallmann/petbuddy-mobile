import { SvgXml } from 'react-native-svg';

import styled from 'styled-components/native';

import logoMin from '~/assets/imgs/logo_min.svg';
import { colors, fontFamilies } from '~/styles/themes';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Top = styled.View`
  height: 165px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray_light};
  padding: 20px;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #999;
`;

export const ViewInfo = styled.View``;

export const Name = styled.Text`
  font-size: 20px;
  color: ${colors.dark};
  font-family: ${fontFamilies.semi_bold};
  margin-bottom: 2px;
`;

export const Pets = styled.Text`
  font-size: 14px;
  color: ${colors.gray_soft};
  font-family: ${fontFamilies.medium};
`;

export const Bottom = styled.View`
  border-top-width: 1px;
  border-top-color: ${colors.gray_light};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled(SvgXml).attrs({
  xml: logoMin,
})``;

export const Version = styled.Text`
  font-size: 14px;
  color: ${colors.gray_soft};
  font-family: ${fontFamilies.medium};
`;
