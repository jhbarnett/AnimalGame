import React from 'react';
import styles from './styles.less';

const GuessView = ({ control, submit, questions, remaining }) => {
  let prevQuestions = [];
  if (questions) { prevQuestions = questions };

  return (
    <div className={styles.guessView}>
      <div className={styles.countBanner}>{remaining} Questions Left</div>
      <form onSubmit={(e) => submit(e)}>
        <input 
          onChange={control}
          placeholder=""/>
        <button>Submit</button>
      </form>
      <div className={styles.slider}>
        { prevQuestions.map((q, i) => 
          <div className={styles.questionCard} key={i}>
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