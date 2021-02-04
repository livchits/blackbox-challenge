import React from 'react';

import Question from '../components/Question/Question';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.container}>
      <Question />
    </div>
  );
}

export default App;
