const QUESTIONS_AMOUNT = 10;
const API_URL = `https://opentdb.com/api.php?amount=${QUESTIONS_AMOUNT}`;

async function api() {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const { results: data } = await response.json();
      return { data, error: !response.ok };
    }
    throw new Error(response.statusText);
  } catch (error) {
    return { error: true, message: error.message };
  }
}

export default api;
