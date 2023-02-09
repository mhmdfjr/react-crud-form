import React, { Component } from 'react'

export default class SublifeCycle extends Component {
    componentWillUnmount() {
        this.props.ubahMakanan('Bakmi')
    }

  render() {
    return (
      <div>
        <h2>Component Sub Life Cycle</h2>
      </div>
    )
  }
}
