import { useQuestioneApiService } from './api/api.service';
import { QuestioneApiResources } from './api/QuestioneApiResources';

export const useAuthService = () => {
  const service = useQuestioneApiService();

  const signIn = async ({ email, password }) => {
    // eslint-disable-next-line prettier/prettier
    const { data } = await service.post(QuestioneApiResources.signIn, { email, password });
    checkApiErrorMessageReturn(data);

    const { token } = data;
    const user = data[0];

    if (!token || !user) {
      // eslint-disable-next-line prettier/prettier
      throw new Error('Api response error: the api response didn\'t match the expected pattern');
    }

    return { token, user };
  };

  const signUp = async ({ name, cpf, email, password }) => {
    // eslint-disable-next-line prettier/prettier
    const { data } = await service.post(QuestioneApiResources.signUp, { name, cpf, email, password });
    checkApiErrorMessageReturn(data);

    const user = data[0];
    return { user };
  };

  const signOut = () => {};

  const checkApiErrorMessageReturn = (data) => {
    if (data.message) {
      throw new Error(data.message);
    }
  };

  return { signIn, signUp, signOut };
};
