import { AUTH_USER, END_CALL, SIGNUP_USER } from './types';

export function signOut(history) {
  localStorage.removeItem('user');
  history.push('/login')
  return { type: END_CALL }
}

export const signInUser = (data, history) => ({
  type: AUTH_USER,
  data,
  history,
});


export const signUp = (data, history) => ({
  type: SIGNUP_USER,
  data,
  history,
});
