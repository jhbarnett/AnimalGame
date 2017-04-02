import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import * as Actions from './actions'
import MenuView from './view'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.routes = this.props.viewMenu ? this.filterMenuItems() : null;
  }

  componentDidMount() {
  }

  filterMenuItems(){
    return this.props.routes.filter(
      (route) => route.title !== 'Game')
  }

  render() {
    return (
      <MenuView routes={this.routes}
        viewMenu={this.props.viewMenu}
        toggleMenu={this.props.toggleMenu.bind(this)} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    viewMenu: state.viewMenu
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    toggleMenu: Actions.toggleMenu
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Menu);