export const useAuthService = () => {
  const signIn = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      return resolve({
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmFuY29kZXF1ZXN0b2VzLmlmY2UuZWR1LmJyXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTkwNjcxOTQyLCJleHAiOjE1OTA3Nzk5NDIsIm5iZiI6MTU5MDY3MTk0MiwianRpIjoibW9mWFBqQ1YzMG90QWF3USIsInN1YiI6MTMzLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.K1-RgnbkP-aMQd1qSFlvdYOEkxfY8xycEwA98aAnQ0k',
        token_type: 'bearer',
        expires_in: 108000,
        '0': {
          id: 133,
          name: 'BRUNO ROCHA DA SILVA',
          email: 'mail.brunorocha@gmail.com',
          acess_level: 0,
          created_at: '2020-05-28T13:18:16.000000Z',
          updated_at: '2020-05-28T13:18:16.000000Z',
          email_verified_at: null,
          show_tour: 1,
        },
      });
    });
  };

  const signUp = ({ name, cpf, email, password }) => {};

  const signOut = () => {};

  return { signIn, signUp, signOut };
};
