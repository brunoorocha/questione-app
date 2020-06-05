import React from 'react';
import Home from './Home';
import { useAuthContext } from '../../contexts/auth/auth';

export default function HomeContainer(props) {
  const { state, signOut } = useAuthContext();
  return <Home {...props} user={state.user} signOut={signOut} />;
}
