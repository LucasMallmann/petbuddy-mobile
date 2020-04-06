import Lottie from 'lottie-react-native';
import styled from 'styled-components/native';

import checked from '~/assets/lottie/checked.json';
import report from '~/assets/lottie/report.json';
import fontFamilies from '~/styles/themes/fontFamilies';

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 0 30px;
`;

export const Card = styled.View`
  width: 100%;
  background: #fff;
  border-radius: 10px;
`;

export const Top = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.type === 'success' ? '20px' : '10px')} 0px;
`;

export const Icon = styled(Lottie).attrs(props => ({
  source: props.type === 'success' ? checked : report,
  autoPlay: true,
  resizeMode: 'contain',
  autoSize: true,
  loop: false,
}))`
  width: ${props => (props.type === 'success' ? '30%' : '35%')};
`;

export const Middle = styled.View`
  width: 90%;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${fontFamilies.medium};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: ${fontFamilies.regular};
  text-align: center;
`;

export const Bottom = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const ButtonAccept = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${props => (props.type === 'success' ? '#32BA7C' : '#FF7761')};
  border-radius: 20px;
`;

export const TitleButtonAccept = styled.Text`
  font-size: 20px;
  font-family: ${fontFamilies.semi_bold};
  color: #fff;
`;
