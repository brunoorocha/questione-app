export const QuestioneApiResources = {
  // apiUrl: 'https://bancodequestoes.ifce.edu.br/api',
  apiUrl: 'http://bancodequestoes.ifce.edu.br/api',

  signIn: '/login',
  signUp: '/register',

  studentEvaluations: ({ page = 1 }) =>
    `/evaluation/student/result/evaluations?page=${page}`,
  evaluationResult: ({ evaluationId }) =>
    `/evaluation/student/result/evaluations-specific/${evaluationId}`,
};
