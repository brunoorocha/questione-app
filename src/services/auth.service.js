import { useQuestioneApiService } from './api/api.service';
import { QuestioneApiResources } from './api/QuestioneApiResources';

export const useAuthService = () => {
  const service = useQuestioneApiService();

  const signIn = async ({ email, password }) => {
    const { data } = await service.post(QuestioneApiResources.signIn, {
      email,
      password,
    });
    return data;
  };

  const signUp = ({ name, cpf, email, password }) => {};

  const signOut = () => {};

  return { signIn, signUp, signOut };
};
