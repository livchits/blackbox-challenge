export interface QuestionData {
  category: string;
  type: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionsState {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  questions: QuestionData[] | null;
}
