import parseData from '../utils/parseData';
import { QuestionData } from '../types';

const QUESTIONS_AMOUNT = 10;
const API_URL = `https://opentdb.com/api.php?amount=${QUESTIONS_AMOUNT}`;

async function api() {
  return fetch(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(({ results }: { results: QuestionData[] }) => results.map(parseData))
    .then((data) => ({ data, error: false }))
    .catch((error) => ({ error: true, message: error.message, data: null }));
}

export default api;
