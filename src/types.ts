export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface ParsedQuestion {
  category: string;
  type: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

export interface QuestionsState {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  questions: ParsedQuestion[] | null;
}
