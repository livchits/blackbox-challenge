import * as React from 'react';

import Card from '../components/Card/Card';
import Question from '../components/Question/Question';
import Button from '../components/Button/Button';
import useQuestions from '../hooks/useQuestions';

import style from './App.module.scss';

function App() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [points, setPoints] = React.useState(0);
  const { status, questions } = useQuestions(isPlaying);

  const restartGame = () => {
    setPoints(0);
    setIsPlaying(true);
  };
  //The game is finished, show points
  if (!isPlaying) {
    return (
      <Card>
        {points
          ? `You won ${points} points!`
          : "You didn't answer any questions correctly"}
        <Button handleClick={restartGame} style={style.restart}>
          Play again
        </Button>
      </Card>
    );
  }
  //The api returned an error
  if (status === 'rejected') {
    return <Card>Sorry, something went wrong.</Card>;
  }
  //The api returned the requested data
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
  //The request to the api is idle or pending
  return <Card>Loading...</Card>;
}

export default App;
