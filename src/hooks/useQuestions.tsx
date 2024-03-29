import * as React from 'react';

import api from '../api';
import { QuestionsState } from '../types';

function useQuestions(isPlaying: boolean): QuestionsState {
  const [{ status, questions }, setState] = React.useState<QuestionsState>({
    status: 'idle',
    questions: null,
  });

  React.useEffect(() => {
    const getQuestions = async () => {
      setState((state) => ({ ...state, status: 'pending' }));
      const { data, error } = await api();
      error
        ? setState((state) => ({ ...state, status: 'rejected' }))
        : setState(() => ({ questions: data, status: 'resolved' }));
    };

    if (isPlaying) {
      getQuestions();
    }
    return () =>
      setState({
        status: 'idle',
        questions: null,
      });
  }, [isPlaying]);

  return { status, questions };
}

export default useQuestions;
