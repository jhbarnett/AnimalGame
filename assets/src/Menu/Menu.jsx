import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import * as Actions from './menuActions'
import MenuView from './MenuView'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.routes = this.props.routes
  }

  componentDidMount() {}

  render() {
    return (
      <MenuView routes={this.routes} 
        closeMenu={this.props.closeMenu.bind(this)} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.menuState,
    active: state.appState
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    closeMenu: Actions.closeMenu
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Menu);