import React, { useContext } from 'react';
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
import { routesNames } from '../../routes/routesNames';
import AuthContext from '../../contexts/auth';

export default function SignIn({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const onPressForgotMyPassword = () => {
    navigation.push(routesNames.forgotPassword);
  };

  const onPressSignUp = () => {
    navigation.push(routesNames.signUp);
  };

  const onPressSignIn = () => {
    signIn({ email: '', password: '' });
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
          />
          <TextField secureTextEntry={true} label="Senha" />
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
    </SafeAreaView>
  );
}
