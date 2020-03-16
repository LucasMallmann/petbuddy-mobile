import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

import female from '~/assets/imgs/female.svg';
import male from '~/assets/imgs/male.svg';
import { colors, fontFamilies } from '~/styles/themes';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '~/styles/themes/responsive';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
`;

export const Container = styled.View`
  align-items: center;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const ImagePet = styled.Image`
  width: ${widthPercentageToDP('100%')}px;
  height: ${heightPercentageToDP('50%')}px;
`;

export const CardInfo = styled.View.attrs({
  shadowColor: '#999',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 2,
})`
  width: ${widthPercentageToDP('80%')}px;
  height: 130px;
  background: ${colors.white};
  border-radius: 10px;
  padding: 22px;
`;

export const ViewTopInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 13px;
`;

export const NamePet = styled.Text`
  font-size: 16px;
  font-family: ${fontFamilies.bold};
  color: ${colors.dark_soft};
`;

export const IconSex = styled(SvgXml).attrs(props => ({
  xml: props.male ? male : female,
}))``;

export const ViewMiddleInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const BreedPet = styled.Text`
  font-size: 12px;
  font-family: ${fontFamilies.medium};
  color: ${colors.dark_gray};
`;

export const YearsPet = styled.Text`
  font-size: 12px;
  font-family: ${fontFamilies.medium};
  color: ${colors.gray};
`;

export const ViewBottomInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconLocation = styled(Icon).attrs({
  name: 'location-on',
  size: 16,
  color: colors.primary,
})`
  margin-right: 5px;
`;

export const DistancePet = styled.Text`
  font-size: 14px;
  font-family: ${fontFamilies.medium};
  color: ${colors.gray_medium};
`;

export const CardDescription = styled.View`
  width: 80%;
  margin-top: 50px;
`;

export const ViewTopDescription = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ViewInfo = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${colors.dark_soft};
  margin-right: 10px;
`;

export const ViewAutor = styled.View``;

export const Autor = styled.Text`
  font-size: 14px;
  font-family: ${fontFamilies.bold};
  color: ${colors.dark_gray};
`;

export const Type = styled.Text`
  font-size: 12px;
  font-family: ${fontFamilies.regular};
  color: ${colors.gray};
  margin-top: 5px;
`;

export const ViewDate = styled.View``;

export const Date = styled.Text`
  font-size: 12px;
  font-family: ${fontFamilies.regular};
  color: ${colors.gray};
`;

export const ViewBottomDescription = styled.View`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 110px;
`;

export const Description = styled.Text`
  font-size: 12px;
  font-family: ${fontFamilies.medium};
  color: ${colors.gray};
  text-align: justify;
  line-height: 16px;
`;

export const ViewFooter = styled.View`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  background: ${colors.primary_light};
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ViewFovorite = styled.TouchableOpacity`
  width: 71px;
  height: 53px;
  background: ${colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const IconFavorite = styled(Icon).attrs({
  name: 'favorite',
  size: 30,
  color: '#fff',
})``;

export const ViewAdopt = styled.TouchableOpacity`
  width: 225px;
  height: 53px;
  background: ${colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const TitleAdopt = styled.Text`
  font-size: 20px;
  font-family: ${fontFamilies.medium};
  color: ${colors.white};
`;

export const Modal = styled.Modal`
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;
