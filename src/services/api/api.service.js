import axios from 'axios';
import { QuestioneApiResources } from './QuestioneApiResources';
import { useAsyncStorage } from '../async-storage.service';

export const useQuestioneApiService = () => {
  const axiosInstance = axios.create({ baseURL: QuestioneApiResources.apiUrl });
  const { getToken } = useAsyncStorage();

  axiosInstance.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return axiosInstance;
};
