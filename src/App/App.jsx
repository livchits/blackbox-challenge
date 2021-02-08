import * as React from 'react';

import Card from '../components/Card/Card';
import Question from '../components/Question/Question';
import getQuestions from '../api';

function App() {
  const [questions, setQuestions] = React.useState();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [points, setPoints] = React.useState(0);
  const isPlaying = currentQuestion > questions?.length ? false : true;

  React.useEffect(() => {
    getQuestions().then((data) => setQuestions(data));
  }, []);

  if (questions) {
    return (
      <Card>
        <Question
          currentQuestion={currentQuestion}
          questionsData={questions}
          setCurrentQuestion={setCurrentQuestion}
          setPoints={setPoints}
        />
      </Card>
    );
  }

  return <Card>Loading...</Card>;
}

export default App;
