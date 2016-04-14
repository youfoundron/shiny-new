import React, { Component, PropTypes, cloneElement } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends Component {
  static displayName = "Home"

  static defaultProps = {}
  static propTypes = {}

  render() {
    <section className="home">
      <h1>Home</h1>
    </section>
  }
}

export default Home
