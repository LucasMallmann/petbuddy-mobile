import styled, { css } from 'styled-components/native';

import fontFamilies from '~/styles/themes/fontFamilies';

export const Container = styled.View`
  width: 100%;
  height: 60px;

  ${props =>
    props.pet &&
    css`
      & {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
      }
    `}
`;

export const ButtonPress = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  height: 60px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: ${fontFamilies.medium};
`;
