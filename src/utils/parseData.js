import { decode } from 'he';

function parseData(questionData) {
  const {
    category,
    difficulty,
    question,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
    type,
  } = questionData;
  const parsedQuestion = decode(question);
  const parsedCorrectAnswer = decode(correctAnswer);
  const parsedIncorrectAnswers = incorrectAnswers.map((text) => decode(text));

  return {
    category,
    difficulty,
    question: parsedQuestion,
    correctAnswer: parsedCorrectAnswer,
    incorrectAnswers: parsedIncorrectAnswers,
    type,
  };
}

export default parseData;
