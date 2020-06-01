import axios from 'axios';
import { QuestioneApiResources } from './QuestioneApiResources';

export const useQuestioneApiService = () => {
  return axios.create({ baseURL: QuestioneApiResources.apiUrl });
};
