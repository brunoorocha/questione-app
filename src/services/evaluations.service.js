import { useQuestioneApiService } from './api/api.service';
import { QuestioneApiResources } from './api/QuestioneApiResources';
import { transformEvaluationFromApi } from '../utils/transformEvaluationFromApi';

export const useEvaluationService = () => {
  const service = useQuestioneApiService();

  const getEvaluations = async (params = { page: 1 }) => {
    const { page } = params;
    // eslint-disable-next-line prettier/prettier
    const { data } = await service.get(QuestioneApiResources.studentEvaluations({ page }));
    const evaluations = data.data;

    if (!evaluations) {
      // eslint-disable-next-line prettier/prettier
      throw new Error('Api response error: the api response didn\'t match the expected pattern');
    }

    const transformedEvaluations = evaluations.map((evaluation) => {
      return transformEvaluationFromApi(evaluation);
    });

    return transformedEvaluations;
  };

  return { getEvaluations };
};
