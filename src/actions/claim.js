import { CREATE_CLAIM, SEARCH_TEXT, FETCH_CLIENTS } from './types';


export const addClaim = (history) => ({
  type: CREATE_CLAIM,
  history
});


export const fetchClients = () => ({
  type: FETCH_CLIENTS
})

export const search = (word) => ({
  type: SEARCH_TEXT,
  word
})