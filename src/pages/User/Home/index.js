import React from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';

import {Avatar} from 'react-native-paper';

import {
  HeaderContainer,
  EnterpreunerArea,
  ContainerHeaderText,
  ExternalContainerAvatar,
  ContainerDataEnterpreuner,
  ContainerDataTitle,
  ButtonAction,
  Container,
  ContainerButtonAction,
} from './styles';

import logo from '../../../assets/img/logo.png';
import user from '../../../assets/img/user.png';
import store from '../../../assets/img/store.png';
import send from '../../../assets/img/send.png';
import group from '../../../assets/img/group.png';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#cc0303'}}>
      <HeaderContainer>
        <EnterpreunerArea>
          <ContainerHeaderText>
            <Text style={{color: '#FFF'}}>Olá, Silvana Menezes</Text>
            <Image source={logo} />
          </ContainerHeaderText>
          <ExternalContainerAvatar>
            <Avatar.Image
              size={60}
              source={user}
              style={{
                border: 5,
                borderSize: 5,
                borderColor: '#cc0303',
                marginLeft: 10,
                position: 'absolute',
                zIndex: 3,
              }}
            />
            <ContainerDataEnterpreuner>
              <ContainerDataTitle>
                <Text>Perfil Empreendedor</Text>
              </ContainerDataTitle>
            </ContainerDataEnterpreuner>
          </ExternalContainerAvatar>
        </EnterpreunerArea>
      </HeaderContainer>
      <Container>
        <Text>Meu Negócio</Text>
        <ContainerButtonAction>
          <ButtonAction>
            <Image source={store} style={{marginBottom: 10}} />
            <Text>Gestao</Text>
            <Text>Financeira</Text>
          </ButtonAction>
          <ButtonAction>
            <Image source={group} style={{marginBottom: 10}} />
            <Text>Emissao de</Text>
            <Text>NF-e</Text>
          </ButtonAction>
          <ButtonAction>
            <Image source={send} style={{marginBottom: 10}} />
            <Text>Cobranças e </Text>
            <Text>Pagamentos</Text>
          </ButtonAction>
        </ContainerButtonAction>
      </Container>
    </SafeAreaView>
  );
}
