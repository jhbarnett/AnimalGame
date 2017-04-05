import React from 'react';
import { Link, Route } from 'react-router-dom'

import styles from './styles.less'

const LobbyView = ({ games }) => {
  return (
    <div className={styles.LobbyView}>
      <div className={styles.halfPage}>
        <h5>Guess</h5>
        <div className={styles.gamesSection}>
          <div className={styles.gamesRender}>
            {
              games ? games.map((game, i) => {
                return (
                  <a className={styles.game} key={i}>{game.animal}</a>
                )
              }) : <h3>None</h3>
            }
          </div>
        </div>
      </div>
      <div className={styles.halfPage}>
        <h5>Answer</h5>
        <div className={styles.gamesSection}>
          <div className={styles.gamesRender}>
            {
              games ? games.map((game, i) => {
                return (
                  <a className={styles.game} key={i}>{game.animal}</a>
                )
              }) : <h3>None</h3>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LobbyView;