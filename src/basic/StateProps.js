import React, { Component } from 'react'
import ThrowProps from './ThrowProps';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: 'Fajar'
        }
    }

    gantiNama = (namaBaru) => {
        this.setState({
            nama: namaBaru
        })
    }
  
    render() {
    return (
      <div>
        <h2>{this.state.nama}</h2>
        <button onClick={() => this.gantiNama('Jarwo')}>Ganti Nama</button>
        <ThrowProps nama={this.state.nama} gantiNama={this.gantiNama} />
      </div>
    )
  }
}
