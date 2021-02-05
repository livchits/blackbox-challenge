import React from 'react';

import Question from '../components/Question/Question';
import getQuestions from '../api';

import style from './App.module.scss';

function App() {
  const [questions, setQuestions] = React.useState();

  React.useEffect(() => {
    getQuestions().then((data) => setQuestions(data));
  }, []);

  if (questions) {
    return (
      <div className={style.container}>
        <main className={style.card}>
          <Question questionsData={questions} />
        </main>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <main className={style.card}>Loading...</main>
    </div>
  );
}

export default App;
