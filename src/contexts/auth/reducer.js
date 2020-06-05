export const actionTypes = {
  SET_USER: 'SET_USER',
  AUTHENTICATION_START: 'AUTHENTICATION_START',
  AUTHENTICATION_END: 'AUTHENTICATION_END',
};

export function authContextReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload.user };
    case actionTypes.AUTHENTICATION_START:
      return { ...state, isAuthenticating: true };
    case actionTypes.AUTHENTICATION_END:
      return { ...state, isAuthenticating: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
