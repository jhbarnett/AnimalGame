import React from 'react'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>  
        <h1> New Game </h1>
        <h3> Choose An Animal: </h3>
        <input type='text'/>
      </div>  
    )
  }
}

export default NewGame