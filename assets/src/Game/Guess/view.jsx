import React from 'react';
import styles from './styles.less';

const GuessView = (props) => {
  return (
    <div className={styles.guessView}>
      <div className={styles.countBanner}>12 Questions Left</div>
      <form>
        <input placeholder=""/>
        <button>Submit</button>
      </form>
      <div className={styles.slider}>
        <div className={styles.questionCard}>
          PREVIOUS QUESTION
        </div>
      </div>
    </div>
  )
}

export default GuessView;