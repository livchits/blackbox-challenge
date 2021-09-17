import { decode } from 'he';

import { QuestionData } from './../types';

function parseData(questionData: QuestionData): QuestionData {
  const { question, correct_answer, incorrect_answers } = questionData;

  const parsedQuestion = decode(question);
  const parsedCorrectAnswer = decode(correct_answer);
  const parsedIncorrectAnswers = incorrect_answers.map((text) => decode(text));

  return {
    ...questionData,
    question: parsedQuestion,
    correct_answer: parsedCorrectAnswer,
    incorrect_answers: parsedIncorrectAnswers,
  };
}

export default parseData;
