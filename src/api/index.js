import parseData from '../utils/parseData';

const QUESTIONS_AMOUNT = 10;
const API_URL = `https://opentdb.com/api.php?amount=${QUESTIONS_AMOUNT}`;

async function api() {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const { results } = await response.json();
      const data = results.map((question) => parseData(question));
      return { data, error: !response.ok };
    }
    throw new Error(response.statusText);
  } catch (error) {
    return { error: true, message: error.message };
  }
}

export default api;
