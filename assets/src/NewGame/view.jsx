import React from 'react';
import styles from './styles.less';

const NewGameView = ({ handleSubmit, controlAnimal, controlOppo, userList, user, dropdown }) => {
  const opponents = userList ? userList.filter(u => u.id !== user.id) : [];

  return (
    <div className={styles.NewGame}>
      <form onSubmit={(e) => handleSubmit(e)}> 
        <label>
        Choose An Animal:
        </label>
        <input 
          name="animalInput"
          onChange={(e) => controlAnimal(e)} 
        />
        <label>
        Choose An Opponent:
        </label>
        <select onChange={(e) => controlOppo(e)} >
          {
            opponents.map((opp, i) => 
              <option key={i} value={opp.id}>{opp.username}</option>
            )
          }
        </select>
        <button type="submit">
        Submit
        </button>
      </form>
    </div>
  )
}

export default NewGameView;