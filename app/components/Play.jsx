import React from 'react'
import Answer from './Answer.jsx'
import Ask from './Ask.jsx'

class Play extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>  
        <h1> Play </h1>
        {this.props.children}
      </div>  
    )
  }
}

export default Play