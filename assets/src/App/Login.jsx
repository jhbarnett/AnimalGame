import React from 'react';
import { Link, Route } from 'react-router-dom'

import styles from './styles.less'

const LoginView = ({ controlUsername, createUser }) => {

  return (
    <div className={styles.loginView}>
      <h1>The Animal Game</h1>
      <form onSubmit={(e) => createUser(e)}>
        <input type='text' 
          placeholder='Username'
          onChange={(e) => controlUsername(e)}/>
        <input type='password' placeholder='Password' />
        <button type='submit'>Play!</button>
      </form>
    </div>
  )
}

export default LoginView;