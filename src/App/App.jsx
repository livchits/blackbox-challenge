import React from 'react';

import Question from '../components/Question/Question';
import getQuestions from '../api';
import Card from '../components/Card/Card';

function App() {
  const [questions, setQuestions] = React.useState();

  React.useEffect(() => {
    getQuestions().then((data) => setQuestions(data));
  }, []);

  if (questions) {
    return (
      <Card>
        <Question questionsData={questions} />
      </Card>
    );
  }

  return <Card>Loading...</Card>;
}

export default App;
