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
      throw new Error('Api response error');
    }

    return { token, user };
  };

  const signUp = ({ name, cpf, email, password }) => {};

  const signOut = () => {};

  const checkApiErrorMessageReturn = (data) => {
    if (data.message) {
      throw new Error(data.message);
    }
  };

  return { signIn, signUp, signOut };
};
