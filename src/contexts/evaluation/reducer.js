export const actionTypes = {
  LOAD_EVALUATION_QUESTIONS_START: 'LOAD_EVALUATION_QUESTIONS_START',
  LOAD_EVALUATION_QUESTIONS_END: 'LOAD_EVALUATION_QUESTIONS_END',
  SET_EVALUATION_QUESTIONS: 'SET_EVALUATION_QUESTIONS',
};

export function evaluationContextReducer(state, action) {
  switch (action.type) {
    case actionTypes.LOAD_EVALUATION_QUESTIONS_START:
      return {
        ...state,
        isLoadingEvaluationQuestions: true,
      };

    case actionTypes.LOAD_EVALUATION_QUESTIONS_END:
      return {
        ...state,
        isLoadingEvaluationQuestions: false,
      };

    case actionTypes.SET_EVALUATION_QUESTIONS:
      return {
        ...state,
        evaluationQuestions: [...action.payload.questions],
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
