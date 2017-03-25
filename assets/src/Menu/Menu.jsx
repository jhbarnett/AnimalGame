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
        openMenu={this.props.openMenu.bind(this)} 
        closeMenu={this.props.closeMenu.bind(this)} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    viewMenu: state.menuReducer
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    openMenu: Actions.openMenu,
    closeMenu: Actions.closeMenu
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Menu);