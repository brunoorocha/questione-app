import React from 'react';
import {
  Heading2,
  Content,
  LinkButton,
  PrimaryButton,
  TextField,
  Label,
  SafeAreaView,
} from '../../components';
import { HeaderView, LogoImage, FooterView, FieldsView } from './styles';
import logo from '../../assets/images/logo-black-blue.png';
import { routesNames } from '../../routes';

export default function SignIn({ navigation }) {
  const onForgotMyPasswordPress = () => {
    navigation.push(routesNames.forgotPassword);
  };

  return (
    <SafeAreaView>
      <Content>
        <HeaderView>
          <LogoImage source={logo} />
        </HeaderView>
        <Heading2>Login</Heading2>
        <FieldsView>
          <TextField
            keyboardType="email-address"
            placeholder="Email:"
            marginBottom={16}
          />
          <TextField secureTextEntry={true} placeholder="Senha:" />
          <LinkButton onPress={onForgotMyPasswordPress}>
            Esqueci minha senha
          </LinkButton>
        </FieldsView>
        <PrimaryButton>Entrar</PrimaryButton>

        <FooterView>
          <Label textAlign="center">Você ainda não tem conta?</Label>
          <LinkButton textAlign="center">Cadastre-se aqui</LinkButton>
        </FooterView>
      </Content>
    </SafeAreaView>
  );
}
