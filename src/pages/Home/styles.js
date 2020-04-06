import { Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

import catGray from '~/assets/imgs/cat_gray.svg';
import dog from '~/assets/imgs/dog.svg';
import female from '~/assets/imgs/female.svg';
import male from '~/assets/imgs/male.svg';
import { colors, fontFamilies } from '~/styles/themes';
import { widthPercentageToDP } from '~/styles/themes/responsive';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
`;

export const Header = styled.View`
  width: 100%;
  height: 93px;
  padding: 24px 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewLeft = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonDrawer = styled.TouchableOpacity``;

export const IconDrawer = styled(Icon).attrs({
  name: 'menu',
  size: 30,
  color: colors.dark_soft,
})``;

export const ViewMiddle = styled.View`
  align-items: center;
`;

export const TextLocation = styled.Text`
  font-size: 16px;
  font-family: ${fontFamilies.medium};
  color: ${colors.primary};
  margin-bottom: 5px;
`;

export const ViewLocation = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconLocation = styled(Icon).attrs({
  name: 'location-on',
  size: 18,
  color: colors.primary,
})`
  margin-right: 5px;
`;

export const TextLocationName = styled.Text`
  font-size: 14px;
  font-family: ${fontFamilies.medium};
  color: ${colors.dark_soft};
`;

export const ViewRight = styled.View``;

export const ButtonPerfil = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: ${colors.dark_soft};
  border-radius: 20px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 30px 30px 0;
  background: ${colors.primary_light};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ViewListType = styled.View``;

export const ListTypes = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ButtonType = styled.TouchableOpacity`
  align-items: center;
  margin-right: 30px;
`;

export const ViewType = styled.View`
  width: 50px;
  height: 50px;
  background: ${props => (props.active ? colors.primary : colors.white)};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const SvgType = styled(SvgXml).attrs(props => ({
  xml: props.active ? dog : catGray,
}))``;

export const TitleType = styled.Text`
  font-size: 14px;
  color: ${props => (props.active ? colors.primary : colors.gray_soft)};
  font-family: ${fontFamilies.medium};
`;

export const ListPets = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
  flex: 1;
  padding-top: 20px;
`;

export const ViewPet = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  flex-direction: row;
  margin-bottom: 50px;
  align-items: center;
`;

export const ImagePet = styled.Image`
  width: ${widthPercentageToDP('42%')}px;
  height: ${widthPercentageToDP('42%')}px;
  border-radius: 10px;
  background: #eee;
`;

export const ViewRightPet = styled.View`
  flex: 1;
  height: ${widthPercentageToDP('35%')}px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #fff;
  padding: 10px;
`;

export const ViewTopPet = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const NamePet = styled.Text`
  font-size: 16px;
  font-family: ${fontFamilies.bold};
  color: ${colors.dark_soft};
  margin-bottom: 7px;
`;

export const BreedPet = styled.Text`
  font-size: 12px;
  font-family: ${fontFamilies.medium};
  color: ${colors.dark_gray};
  margin-bottom: 12px;
`;

export const YearsPet = styled.Text`
  font-size: 12px;
  font-family: ${fontFamilies.medium};
  color: ${colors.gray};
`;

export const IconSex = styled(SvgXml).attrs(props => ({
  xml: props.male ? male : female,
}))``;

export const DistancePet = styled.Text`
  font-size: 14px;
  font-family: ${fontFamilies.medium};
  color: ${colors.gray_medium};
  margin-top: 10px;
`;
