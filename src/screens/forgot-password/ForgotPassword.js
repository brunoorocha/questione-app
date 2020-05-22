import React from 'react';
import { Heading2, Paragraph, Content } from '../../components';

export default function ForgotPassword() {
  return (
    <Content>
      <Heading2>Esqueceu sua senha?</Heading2>
      <Paragraph>
        Não precisa se preocupar, digite o email que você utiliza para acessar o
        Questione, se o seu email exisitir na nossa base de dados estaremos
        enviando um link para que você possa redefinir a sua senha.
      </Paragraph>
    </Content>
  );
}
