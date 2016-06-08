import React, { Component, PropTypes, cloneElement } from 'react'

// Helper Modules && Components
// import Helmet from 'react-helmet'
// import Header from './Header'
// import Footer from './Footer'

class App extends Component {

  static defaultProps = { message: "Check me out!" }

  static propTypes = { message: PropTypes.string}

  constructor(props, context) {
    super(props, context)
    this.state = {}
    // Operations usually carried out in componentWillMount go here
    // ...
  }

  render() {
    const { message } = this.props

    return (
      <div className="app">
        <Header />

        <h1>{message}</h1>
        { this.props.children }

        <Footer />
      </div>
    )
  }
}

export default App
