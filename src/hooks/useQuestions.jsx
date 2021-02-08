import * as React from 'react';

import getQuestions from '../api';

function useQuestions(isPlaying) {
  const [status, setStatus] = React.useState('idle'); //idle - pending - resolved - rejected
  const [questions, setQuestions] = React.useState();

  React.useEffect(() => {
    setStatus('pending');
    getQuestions().then((data) => {
      setQuestions(data);
      setStatus('resolved');
    }, setStatus('rejected'));
  }, [isPlaying]);

  return { status, questions };
}

export default useQuestions;
