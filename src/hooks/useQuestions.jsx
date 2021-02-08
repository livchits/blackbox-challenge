import * as React from 'react';

import getQuestions from '../api';

function useQuestions(isPlaying) {
  const [questions, setQuestions] = React.useState(null);
  const [status, setStatus] = React.useState('idle'); //idle - pending - resolved - rejected

  React.useEffect(() => {
    setStatus('pending');
    getQuestions().then((data) => {
      setStatus('resolved');
      setQuestions(data);
    }, setStatus('rejected'));
  }, [isPlaying]);

  return { status: status, questions: questions };
}

export default useQuestions;
