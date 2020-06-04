import React, { useState } from 'react';
import * as yup from 'yup';
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
import { useFormErrors } from '../../utils/useFormErrors';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, isAuthenticating } = useAuthContext();

  const formValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Por favor informe seu email')
      .email('O seu email deve estar no formato seuemail@exemplo.com'),
    password: yup.string().required('Por favor informe sua senha'),
  });

  const {
    formErrors,
    checkErrorsForField,
    clearErrorsForField,
    validate,
  } = useFormErrors(formValidationSchema);

  const onPressForgotMyPassword = () => {
    navigation.push(routesNames.forgotPassword);
  };

  const onPressSignUp = () => {
    navigation.push(routesNames.signUp);
  };

  const onPressSignIn = () => {
    const credentials = { email, password };
    validate(credentials).then(() => {
      signIn(credentials);
    });
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
            error={formErrors.email}
            autoCapitalize="none"
            onChangeText={(text) => {
              setEmail(text);
              clearErrorsForField('email');
            }}
            onBlur={() => {
              checkErrorsForField('email', email);
            }}
          />
          <TextField
            secureTextEntry={true}
            label="Senha"
            error={formErrors.password}
            onChangeText={(text) => {
              setPassword(text);
              clearErrorsForField('password');
            }}
            onBlur={() => {
              checkErrorsForField('password', password);
            }}
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
