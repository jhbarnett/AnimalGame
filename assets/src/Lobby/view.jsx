import React from 'react';
import { Link, Route } from 'react-router-dom'

import styles from './styles.less'

const LobbyView = ({ games, enterGame, userID }) => {
  const answer = games ? games.filter(g => g.player1 === userID) : []; 
  const guess = games ? games.filter(g => g.player2 === userID) : []; 

  return (
    <div className={styles.LobbyView}>
      <div className={styles.halfPage}>
        <h5>Guess</h5>
        <div className={styles.gamesSection}>
          <div className={styles.gamesRender}>
            {
              guess.map((game, i) =>
                <a className={styles.game} 
                   key={i}
                   onClick={() => enterGame(game.id)}>
                ???</a>
              )
            }
          </div>
        </div>
      </div>
      <div className={styles.halfPage}>
        <h5>Answer</h5>
        <div className={styles.gamesSection}>
          <div className={styles.gamesRender}>
            {
              answer.map((game, i) => {
                return (
                  <a className={styles.game} 
                     key={i}
                     onClick={() => enterGame(game.id)}>
                  {game.animal}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LobbyView;