import React from 'react';

import PropTypes from 'prop-types';

import {
  Modal,
  Container,
  Card,
  Top,
  Icon,
  Middle,
  Title,
  Description,
  Bottom,
  ButtonAccept,
  TitleButtonAccept,
} from './styles';

export default function Alert({ type, open, description, onPress }) {
  return (
    <Modal animationType="fade" transparent visible={open}>
      <Container>
        {type === 'success' ? (
          <Card>
            <Top type={type}>
              <Icon type={type} />
            </Top>
            <Middle>
              <Title>Sucesso</Title>
              <Description>{description}</Description>
            </Middle>
            <Bottom>
              <ButtonAccept type={type} onPress={onPress}>
                <TitleButtonAccept>entendi</TitleButtonAccept>
              </ButtonAccept>
            </Bottom>
          </Card>
        ) : (
          <Card>
            <Top type={type}>
              <Icon type={type} />
            </Top>
            <Middle>
              <Title>Erro</Title>
              <Description>{description}</Description>
            </Middle>
            <Bottom>
              <ButtonAccept type={type} onPress={onPress}>
                <TitleButtonAccept>entendi</TitleButtonAccept>
              </ButtonAccept>
            </Bottom>
          </Card>
        )}
      </Container>
    </Modal>
  );
}

Alert.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool.isRequired,
  description: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Alert.defaultProps = {
  type: null,
  description: null,
};
