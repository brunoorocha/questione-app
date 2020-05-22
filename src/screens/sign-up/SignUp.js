import React from 'react';
import { Heading2, Content, TextField, PrimaryButton } from '../../components';
import { HeaderView } from './styles';

export default function SignUp() {
  return (
    <Content>
      <HeaderView>
        <Heading2>Crie uma nova conta</Heading2>
      </HeaderView>
      <TextField placeholder="Nome completo:" marginBottom={16} />
      <TextField placeholder="CPF:" marginBottom={16} />
      <TextField placeholder="Email:" marginBottom={16} />
      <TextField
        placeholder="Senha:"
        marginBottom={16}
        secureTextEntry={true}
      />
      <PrimaryButton>Criar conta</PrimaryButton>
    </Content>
  );
}
