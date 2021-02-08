import * as React from 'react';

import Card from '../components/Card/Card';
import Question from '../components/Question/Question';
import useQuestions from '../hooks/useQuestions';

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [points, setPoints] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const { status, questions } = useQuestions(isPlaying);

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
