import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'

export default class Main extends Component {
  render() {
    return (
      <main id="main-content">
        <Container fluid={ true }>
          { this.props.children }
        </Container>
      </main>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node,
}
