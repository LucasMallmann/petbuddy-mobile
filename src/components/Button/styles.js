import styled from 'styled-components/native';

import { colors, fontFamilies } from '~/styles/themes';

export const Container = styled.View`
  width: 100%;
`;

export const ButtonPress = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background: ${colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  font-family: ${fontFamilies.medium};
`;
