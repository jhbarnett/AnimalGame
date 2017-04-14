import React from 'react';
import styles from './styles.less';

const AnswerView = ({ animal, control, submit, unanswered, remaining }) => {

  if (unanswered) {
    return (
      <div className={styles.answerView}>
        <div className={styles.countBanner}>{remaining} Questions Left</div>
        <div className={styles.question}> 
          {unanswered.question}
        </div>
        <form>
          <input 
            onChange={control}
            placeholder=""/>
          <div>
            <button onClick={(e) => submit(e, true)}>Yes</button>
            <button onClick={(e) => submit(e, false)}>No</button>
          </div>
        </form>
        <div className={styles.animalBanner}>{animal}</div>
      </div>
    )
  } else {
    return (
      <div>Sorry, It's Not Your Turn</div>
    )
  }
}

export default AnswerView;