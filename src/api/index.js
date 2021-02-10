import parseData from '../utils/parseData';

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
    .then((results) => results.map(parseData))
    .then((data) => ({ data, error: false }))
    .catch((error) => ({ error: true, message: error.message }));
}

export default api;
