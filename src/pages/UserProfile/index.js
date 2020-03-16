import React, { useEffect, useState } from 'react';
import { StatusBar, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import { useNavigation, DrawerActions } from '@react-navigation/native';

import { signOut } from '~/store/modules/auth/actions';

import BG from '../../assets/imgs/wave.png';
import Avatar from '../../components/Avatar';
import BackButton from '../../components/BackButton';
import colors from '../../styles/themes/colors';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Scroll,
  Header,
  Container,
  ContainerImage,
  ContainerAvatar,
  EditAvatarButton,
  UserName,
  ListOptions,
  Option,
  OptionText,
  OptionTitle,
  Row,
  Switcher,
} from './styles';

export default function UserProfile() {
  const [notification, setNotification] = useState(true);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    const backPress = () => {
      navigation.dispatch(DrawerActions.openDrawer());
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', backPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backPress);
    };
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <KeyboardAvoidingView>
        <SafeAreaView>
          <BackButton
            press={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ backgroundColor: colors.primary }}
          />
          <Container>
            <ContainerAvatar>
              <EditAvatarButton>
                <Avatar
                  url="https://api.adorable.io/avatars/50/abott@adorable.png"
                  size="M"
                  border
                />
              </EditAvatarButton>
              <UserName>Luiza Avelino</UserName>
            </ContainerAvatar>

            <ContainerImage>
              <Header source={BG} resizeMode="stretch" />
            </ContainerImage>
            <Container>
              <Scroll>
                <ListOptions>
                  <Option
                    onPress={() => {
                      navigation.navigate('EditUserInfo', {
                        title: 'Mudar Nome',
                        option: 1,
                      });
                    }}
                  >
                    <OptionTitle>Nome</OptionTitle>
                    <Row>
                      <OptionText>João Lucas</OptionText>
                      <Icon name="chevron-right" size={28} color="#999" />
                    </Row>
                  </Option>
                  <Option
                    onPress={() => {
                      navigation.navigate('EditUserInfo', {
                        title: 'Mudar E-mail',
                        option: 2,
                      });
                    }}
                  >
                    <OptionTitle>E-mail</OptionTitle>
                    <Row>
                      <OptionText>j***@**.com</OptionText>
                      <Icon name="chevron-right" size={28} color="#999" />
                    </Row>
                  </Option>
                  <Option
                    onPress={() => {
                      navigation.navigate('EditUserInfo', {
                        title: 'Mudar Senha',
                        option: 3,
                      });
                    }}
                  >
                    <OptionTitle>Senha</OptionTitle>
                    <Row>
                      <OptionText>Alterar a senha</OptionText>
                      <Icon name="chevron-right" size={28} color="#999" />
                    </Row>
                  </Option>
                  <Option onPress={() => setNotification(!notification)}>
                    <OptionTitle>Notificações</OptionTitle>
                    <Row>
                      <OptionText>Ative ou desative</OptionText>
                      <Switcher
                        thumbColor="#fff"
                        trackColor={{ true: '#7239F2' }}
                        value={notification}
                        onValueChange={() => setNotification(!notification)}
                      />
                    </Row>
                  </Option>
                  <Option>
                    <OptionTitle>FAQ</OptionTitle>
                    <Row>
                      <OptionText>Tire suas dúvidas</OptionText>
                      <Icon name="chevron-right" size={28} color="#999" />
                    </Row>
                  </Option>
                  <Option disableBorder onPress={() => dispatch(signOut())}>
                    <Row>
                      <OptionTitle>Sair</OptionTitle>
                      <Icon name="chevron-right" size={28} color="#999" />
                    </Row>
                  </Option>
                </ListOptions>
              </Scroll>
            </Container>
          </Container>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}
