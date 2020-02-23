import { SvgXml } from 'react-native-svg';

import styled from 'styled-components/native';

import logo from '~/assets/imgs/logo.svg';
import peopleAndPets from '~/assets/imgs/people_and_pets.svg';
import Button from '~/components/Button';
import { colors, fontFamilies } from '~/styles/themes';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
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
`;

export const ViewTop = styled.View`
  align-items: center;
`;

export const Logo = styled(SvgXml).attrs({
  xml: logo,
})``;

export const ViewTitle = styled.View`
  align-items: center;
  margin-top: 38px;
`;

export const Title = styled.Text`
  color: ${colors.dark_soft};
  font-size: 20px;
  font-family: ${fontFamilies.regular};
`;

export const ViewMiddle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PeopleImage = styled(SvgXml).attrs({
  xml: peopleAndPets,
})``;

export const ViewBottom = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ViewTitleBottom = styled.View`
  align-items: center;
  margin-bottom: 70px;
`;

export const TitleBottom = styled.Text`
  color: ${colors.gray};
  font-size: 16px;
  font-family: ${fontFamilies.medium};
`;

export const ButtonPress = styled(Button)``;

export const ViewSignIn = styled.View`
  flex-direction: row;
  margin-top: 22px;
`;

export const TitleSign = styled.Text`
  color: ${colors.gray};
  font-size: 16px;
  font-family: ${fontFamilies.medium};
`;

export const ButtonSignIn = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 10, bottom: 10, right: 10 },
})`
  margin-left: 5px;
`;

export const TitleSignIn = styled.Text`
  color: ${colors.green};
  font-size: 16px;
  font-family: ${fontFamilies.medium};
`;
