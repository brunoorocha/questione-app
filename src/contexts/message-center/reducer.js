export const actionTypes = {
  DISPATCH_MESSAGE: 'DISPATCH_MESSAGE',
};

export function messageCenterContexReducer(state, action) {
  switch (action.type) {
    case actionTypes.DISPATCH_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
