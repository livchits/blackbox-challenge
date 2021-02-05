const QUESTIONS_AMOUNT = 10;
const API_URL = `https://opentdb.com/api.php?amount=${QUESTIONS_AMOUNT}`;

function getQuestions() {
  return fetch(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(({ results }) => results)
    .catch((error) => ({ error: true, message: error.message }));
}

export default getQuestions;
