import { useQuestioneApiService } from './api/api.service';
import { QuestioneApiResources } from './api/QuestioneApiResources';
import { transformEvaluationFromApi } from '../utils/transformEvaluationFromApi';
import { transformQuestionResultFromApi } from '../utils/transformQuestionResultFromApi';
import { transformQuestionFromApi } from '../utils/transformQuestionFromApi';
import { mockedResponse } from './mocks/startEvaluationMockResponse';

export const useEvaluationService = () => {
  const service = useQuestioneApiService();

  const getEvaluations = async (params = { page: 1 }) => {
    const { page } = params;
    const resource = QuestioneApiResources.studentEvaluations({ page });

    const { data } = await service.get(resource);
    const evaluations = data.data;

    if (!evaluations) {
      // eslint-disable-next-line prettier/prettier
      throw new Error('Api response error: the api response didn\'t match the expected pattern');
    }

    const transformedEvaluations = evaluations.map((evaluation) =>
      transformEvaluationFromApi(evaluation),
    );

    return transformedEvaluations;
  };

  const getEvaluationResult = async ({ evaluationId }) => {
    if (!evaluationId) {
      throw new Error('The evaluationId param cannot be undefined or null');
    }

    const resource = QuestioneApiResources.evaluationResult({ evaluationId });
    const { data } = await service.get(resource);

    const transformedResult = transformQuestionResultFromApi(data);
    return { result: transformedResult };
  };

  const startEvaluation = async ({ evaluationCode }) => {
    if (!evaluationCode) {
      throw new Error('The evaluationCode param cannot be undefined or null');
    }

    // const resource = QuestioneApiResources.startEvaluation({ evaluationCode });
    // const { data } = await service.post(resource);
    const questions = mockedResponse;
    const transformedQuestions = questions.map((question) =>
      transformQuestionFromApi(question),
    );

    return { questions: transformedQuestions };
  };

  return { getEvaluations, getEvaluationResult, startEvaluation };
};
