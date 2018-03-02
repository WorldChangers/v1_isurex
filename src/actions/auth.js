import { AUTH_USER, END_CALL, SIGNUP_USER } from './types';

export async function signOut(history) {
  await {type: END_CALL}
  await localStorage.clear()
  await history.push('/login')
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
