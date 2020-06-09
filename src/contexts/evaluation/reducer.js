export const actionTypes = {
  SET_SELECTED_EVALUATION: 'SET_SELECTED_EVALUATION',
};

export function evaluationContextReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_EVALUATION:
      return {
        ...state,
        selectedEvaluation: action.payload.selectedEvaluation,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
