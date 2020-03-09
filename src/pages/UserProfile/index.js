import React, { useEffect, useState } from 'react';
import { StatusBar, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

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
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const navigation = useNavigation();

  // const passwordRef = useRef(null);

  useEffect(() => {
    const backPress = () => {
      navigation.navigate('Home');
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
            press={() => navigation.navigate('Home')}
            style={{ position: 'absolute', zIndex: 1 }}
          />
          <Container>
            <ContainerAvatar>
              <Avatar
                url="https://api.adorable.io/avatars/50/abott@adorable.png"
                size="M"
                border
              />
              <UserName>Luiza Avelino</UserName>
            </ContainerAvatar>

            <ContainerImage>
              <Header
                source={BG}
                resizeMode="cover"
                imageStyle={{ top: -40 }}
              />
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
                      <Icon name="chevron-right" size={22} color="#999" />
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
                      <Icon name="chevron-right" size={22} color="#999" />
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
                      <Icon name="chevron-right" size={22} color="#999" />
                    </Row>
                  </Option>
                  <Option onPress={() => setNotification(!notification)}>
                    <Row>
                      <OptionTitle>Notificações</OptionTitle>
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
                      <Icon name="chevron-right" size={22} color="#999" />
                    </Row>
                  </Option>
                  <Option disableBorder>
                    <Row>
                      <OptionTitle>Sair</OptionTitle>
                      <Icon name="chevron-right" size={22} color="#999" />
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
