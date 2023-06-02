export const initialUserState = { user: null };

export function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {...action.payload};
    default:
      return state;
  }
}
