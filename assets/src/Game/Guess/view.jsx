import React from 'react';
import styles from './styles.less';

const GuessView = ({ control, submit, questions, remaining, opponent }) => {
  let prevQuestions = [];
  if (questions) { prevQuestions = questions };

  return (
    <div className={styles.guessView}>
      <div>
        <div className={styles.countBanner}>{remaining} Questions Left</div>
        {/*<div className={styles.vsBanner}>vs. {opponent}</div>*/}
      </div>
      <form onSubmit={(e) => submit(e)}>
        <input 
          onChange={control}
          placeholder=""/>
        <button>Submit</button>
      </form>
      <div className={styles.slider}>
        { prevQuestions.map((q, i) => 
          <div className={styles.questionCard} key={i}>
            <div>{i+1}</div>
            <div>{q.question}</div>
            <div>{q.answer ? "Yes" : "No"}</div>
            <div>{q.note ? q.note : null}</div>
          </div>
        ) }
      </div>
    </div>
  )
}

export default GuessView;