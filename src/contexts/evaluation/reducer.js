export const actionTypes = {
  SET_SELECTED_EVALUATION: 'SET_SELECTED_EVALUATION',

  SET_SELECTED_EVALUATION_RESULT: 'SET_SELECTED_EVALUATION_RESULT',
  LOAD_SELECTED_EVALUATION_RESULT_START:
    'LOAD_SELECTED_EVALUATION_RESULT_START',
  LOAD_SELECTED_EVALUATION_RESULT_END: 'LOAD_SELECTED_EVALUATION_RESULT_END',

  LOAD_EVALUATION_QUESTIONS_START: 'LOAD_EVALUATION_QUESTIONS_START',
  LOAD_EVALUATION_QUESTIONS_END: 'LOAD_EVALUATION_QUESTIONS_END',
  SET_EVALUATION_QUESTIONS: 'SET_EVALUATION_QUESTIONS',

  LOAD_EVALUATIONS_START: 'LOAD_EVALUATIONS_START',
  LOAD_EVALUATIONS_END: 'LOAD_EVALUATIONS_END',
  SET_EVALUATIONS: 'SET_EVALUATIONS',
};

export function evaluationContextReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_EVALUATION:
      return {
        ...state,
        selectedEvaluation: action.payload.selectedEvaluation,
      };

    case actionTypes.SET_SELECTED_EVALUATION_RESULT:
      return {
        ...state,
        selectedEvaluation: {
          ...state.selectedEvaluation,
          result: action.payload.result,
        },
      };

    case actionTypes.LOAD_SELECTED_EVALUATION_RESULT_START:
      return {
        ...state,
        isLoadingSelectedEvaluationResult: true,
      };

    case actionTypes.LOAD_SELECTED_EVALUATION_RESULT_END:
      return {
        ...state,
        isLoadingSelectedEvaluationResult: false,
      };

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

    case actionTypes.SET_EVALUATIONS:
      return {
        ...state,
        evaluations: [...action.payload.evaluations],
      };

    case actionTypes.LOAD_EVALUATIONS_START:
      return {
        ...state,
        isLoadingEvaluations: true,
      };

    case actionTypes.LOAD_EVALUATIONS_END:
      return {
        ...state,
        isLoadingEvaluations: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
