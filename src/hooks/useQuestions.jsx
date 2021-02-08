import * as React from 'react';

import api from '../api';

function useQuestions(isPlaying) {
  const [status, setStatus] = React.useState('idle');
  const [questions, setQuestions] = React.useState(null);

  React.useEffect(() => {
    const getQuestions = async () => {
      setStatus('pending');
      const { data, error } = await api();
      if (error) {
        setStatus('rejected');
      } else {
        setQuestions(data);
        setStatus('resolved');
      }
    };
    getQuestions();
  }, [isPlaying]);

  return { status, questions };
}

export default useQuestions;
