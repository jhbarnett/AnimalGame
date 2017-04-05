import React from 'react';
import styles from './styles.less';

const NewGameView = ({ handleSubmit, controlInput }) => {
  return (
    <div className={styles.NewGame}>
      <form onSubmit={(e) => handleSubmit(e)}> 
        <h3>
        Choose An Animal:
        </h3>
        <input onChange={(e) => controlInput(e)} />
        <button type="submit">
        Submit
        </button>
      </form>
    </div>
  )
}

export default NewGameView;