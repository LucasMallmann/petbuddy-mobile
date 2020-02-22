import { Platform } from 'react-native';

import styled from 'styled-components/native';

export const ButtonPress = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'ios' ? 50 : 20}px;
  left: 15px;
  justify-content: center;
  align-items: center;
`;
