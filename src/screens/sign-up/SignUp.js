import React from 'react';
import {
  Heading2,
  Content,
  TextField,
  PrimaryButton,
  BaseView,
} from '../../components';
import { HeaderView } from './styles';

export default function SignUp(props) {
  return (
    <BaseView {...props} title="Criar conta">
      <Content>
        <HeaderView>
          <Heading2>Crie uma nova conta</Heading2>
        </HeaderView>
        <TextField label="Nome completo" marginBottom={16} />
        <TextField label="CPF" marginBottom={16} />
        <TextField label="Email" marginBottom={16} />
        <TextField label="Senha" marginBottom={16} secureTextEntry={true} />
        <PrimaryButton>Criar conta</PrimaryButton>
      </Content>
    </BaseView>
  );
}
