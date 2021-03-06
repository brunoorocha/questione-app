import React, { useState } from 'react';
import * as yup from 'yup';
import {
  Heading2,
  Content,
  TextField,
  PrimaryButton,
  BaseView,
  FullscreenActivityIndicator,
} from '../../components';
import { HeaderView } from './styles';
import { useFormErrors } from '../../utils/useFormErrors';
import { useAuthContext } from '../../contexts/auth';

export default function SignUp(props) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, isAuthenticating } = useAuthContext();

  const formValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Por favor informe seu nome')
      .min(8, 'O nome deve ser ter pelo menos 8 letras')
      .max(50, 'O nome deve ser ter menos de 50 letras'),
    cpf: yup.string().required('Por favor informe seu CPF'),
    email: yup
      .string()
      .required('Por favor informe seu email')
      .email('O seu email deve estar no formato seuemail@exemplo.com'),
    password: yup
      .string()
      .required('Por favor informe sua senha')
      .min(6, 'A senha deve ter pelo menos 6 letras')
      .max(10, 'A senha deve ter até 10 letras'),
  });

  const {
    formErrors,
    validate,
    checkErrorsForField,
    clearErrorsForField,
  } = useFormErrors(formValidationSchema);

  const onPressSignUp = () => {
    const signUpPayload = { name, cpf, email, password };
    validate(signUpPayload).then(() => {
      signUp(signUpPayload);
    });
  };

  return (
    <BaseView {...props} navigationHideBorderBottom={true}>
      <Content>
        <HeaderView>
          <Heading2>Crie uma nova conta</Heading2>
        </HeaderView>
        <TextField
          label="Nome completo"
          marginBottom={16}
          error={formErrors.name}
          onBlur={() => {
            checkErrorsForField('name', name);
          }}
          onChangeText={(text) => {
            setName(text);
            clearErrorsForField('name');
          }}
        />
        <TextField
          label="CPF"
          type="cpf"
          keyboardType="numeric"
          marginBottom={16}
          error={formErrors.cpf}
          onBlur={() => {
            checkErrorsForField('cpf', cpf);
          }}
          onChangeText={(text) => {
            setCpf(text);
            clearErrorsForField('cpf');
          }}
        />
        <TextField
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          marginBottom={16}
          error={formErrors.email}
          onBlur={() => {
            checkErrorsForField('email', email);
          }}
          onChangeText={(text) => {
            setEmail(text);
            clearErrorsForField('email');
          }}
        />
        <TextField
          label="Senha"
          marginBottom={16}
          secureTextEntry={true}
          error={formErrors.password}
          onBlur={() => {
            checkErrorsForField('password', password);
          }}
          onChangeText={(text) => {
            setPassword(text);
            clearErrorsForField('password');
          }}
        />
        <PrimaryButton onPress={onPressSignUp}>Criar conta</PrimaryButton>
      </Content>

      <FullscreenActivityIndicator isVisible={isAuthenticating} />
    </BaseView>
  );
}
