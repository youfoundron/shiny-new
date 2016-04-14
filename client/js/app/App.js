import React, { Component, PropTypes, cloneElement } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import * as Actions from '../../actions'

// Helper Modules
import cn from 'classnames'
import * as _ from 'lodash'

// Components
import Nav from './Nav'
import Footer from './Footer'
import Helmet from 'react-helmet'

/* React on ES6+
** https://babeljs.io/blog/2015/06/07/react-on-es6-plus
*/
class App extends Component {
  static displayName = "App"

  // Property initializers
  static defaultProps = {
    // actions: []
  }

  static propTypes = {
    // actions: PropTypes.object.isRequired
  }

  // Get initial state
  state = {}

  // Lifecycle functions
  constructor(props, context) {
    super(props, context)
    // Operations usually carried out in componentWillMount go here

    // this.props.actions.callAction
  }

  render() {

    return (
      <section className="main">
        <Helmet title='Shiny New' titleTemplate="%s - Shiny New"/>
        <Nav/>

        { this.props.children }

        <Footer/>
      </section>
    )
  }
}

export default App

/* Connecting a react component to a redux store
** https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
*/
// function mapStateToProps(state) {
//   return state
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActioncreators(Actions, dispatch)
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
