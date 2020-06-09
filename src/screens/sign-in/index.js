import React from 'react';
import SignIn from './SignIn';
import { useAuthContext } from '../../contexts/auth';

export default function SignInContainer(props) {
  const { state, signIn } = useAuthContext();
  return <SignIn {...props} isAuthenticating={state.user} signIn={signIn} />;
}
