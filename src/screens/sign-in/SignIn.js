import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import {
  Heading2,
  Content,
  LinkButton,
  PrimaryButton,
  TextField,
  Label,
  SafeAreaView,
  FullscreenActivityIndicator,
} from '../../components';
import { HeaderView, LogoImage, FooterView, FieldsView } from './styles';
import logo from '../../assets/images/logo-black-blue.png';
import { routesNames } from '../../routes/routesNames';
import { useAuthContext } from '../../contexts/auth';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, isAuthenticating, authenticationError } = useAuthContext();

  useEffect(() => {
    if (authenticationError) {
      Alert.alert(
        'Ooops, algo não está certo',
        `${authenticationError.message}`,
      );
    }
  }, [authenticationError]);

  const onPressForgotMyPassword = () => {
    navigation.push(routesNames.forgotPassword);
  };

  const onPressSignUp = () => {
    navigation.push(routesNames.signUp);
  };

  const onPressSignIn = () => {
    signIn({ email, password });
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
            label="Email"
            marginBottom={16}
            onChangeText={setEmail}
          />
          <TextField
            secureTextEntry={true}
            label="Senha"
            onChangeText={setPassword}
          />
          <LinkButton onPress={onPressForgotMyPassword}>
            Esqueci minha senha
          </LinkButton>
        </FieldsView>
        <PrimaryButton onPress={onPressSignIn}>Entrar</PrimaryButton>

        <FooterView>
          <Label textAlign="center">Você ainda não tem conta?</Label>
          <LinkButton textAlign="center" onPress={onPressSignUp}>
            Cadastre-se aqui
          </LinkButton>
        </FooterView>
      </Content>

      <FullscreenActivityIndicator isVisible={isAuthenticating} />
    </SafeAreaView>
  );
}
