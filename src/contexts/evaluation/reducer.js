export const actionTypes = {
  SET_SELECTED_EVALUATION: 'SET_SELECTED_EVALUATION',
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
