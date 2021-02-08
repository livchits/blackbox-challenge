import * as React from 'react';

import Card from '../components/Card/Card';
import Question from '../components/Question/Question';
import getQuestions from '../api';

function App() {
  const [questions, setQuestions] = React.useState();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [points, setPoints] = React.useState(0);
  // const isPlaying = currentQuestion > questions?.length ? false : true;
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [status, setStatus] = React.useState('idle'); //idle - pending - resolved - rejected

  React.useEffect(() => {
    setStatus('pending');
    getQuestions().then((data) => {
      setQuestions(data);
      setStatus('resolved');
    }, setStatus('rejected'));
  }, [isPlaying]);

  if (!isPlaying) {
    return <Card>You won {points} points</Card>;
  }

  if (status === 'pending') {
    return <Card>Loading...</Card>;
  }

  if (status === 'resolved') {
    return (
      <Card>
        <Question
          currentQuestion={currentQuestion}
          questionsData={questions}
          setCurrentQuestion={setCurrentQuestion}
          setIsPlaying={setIsPlaying}
          setPoints={setPoints}
        />
      </Card>
    );
  }

  return null;
}

export default App;
