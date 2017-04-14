import React from 'react';
import styles from './styles.less';

const GuessView = ({ control, submit }) => {
  return (
    <div className={styles.guessView}>
      <div className={styles.countBanner}>12 Questions Left</div>
      <form onSubmit={(e) => submit(e)}>
        <input 
          onChange={control}
          placeholder=""/>
        <button>Submit</button>
      </form>
      <div className={styles.slider}>
        <div className={styles.questionCard}>
          PREVIOUS QUESTION
        </div>
        <div className={styles.questionCard}>
          PREVIOUS QUESTION
        </div>
      </div>
    </div>
  )
}

export default GuessView;