import * as React from 'react';

import Card from '../components/Card/Card';
import Question from '../components/Question/Question';
import getQuestions from '../api';

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
