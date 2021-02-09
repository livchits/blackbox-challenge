import * as React from 'react';

import api from '../api';

function useQuestions(isPlaying) {
  // const [status, setStatus] = React.useState('idle');
  // const [questions, setQuestions] = React.useState(null);

  const [{ status, questions }, setState] = React.useState({
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

    getQuestions();
  }, [isPlaying]);

  return { status, questions };
}

export default useQuestions;
