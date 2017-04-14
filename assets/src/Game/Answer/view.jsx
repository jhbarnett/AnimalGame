import React from 'react';
import styles from './styles.less';

const AnswerView = ({ animal, control, submit, lastQ }) => {
  if (lastQ) {
    return (
      <div className={styles.answerView}>
        <div className={styles.countBanner}>12 Questions Left</div>
        <div className={styles.question}> 
          {lastQ.question}
        </div>
        <form>
          <input 
            onChange={control}
            placeholder=""/>
          <div>
            <button>Yes</button>
            <button>No</button>
          </div>
        </form>
        <div className={styles.animalBanner}>{animal}</div>
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

export default AnswerView;