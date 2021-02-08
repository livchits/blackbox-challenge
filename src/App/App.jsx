import * as React from 'react';

import Card from '../components/Card/Card';
import Question from '../components/Question/Question';
import useQuestions from '../hooks/useQuestions';

function App() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [points, setPoints] = React.useState(0);
  const { status, questions } = useQuestions(isPlaying);

  if (!isPlaying) {
    return <Card>{`You won ${points} points`}</Card>;
  }

  if (status === 'pending') {
    return <Card>Loading...</Card>;
  }

  if (status === 'resolved') {
    return (
      <Card>
        <Question
          questionsData={questions}
          setIsPlaying={setIsPlaying}
          setPoints={setPoints}
        />
      </Card>
    );
  }

  return null;
}

export default App;
