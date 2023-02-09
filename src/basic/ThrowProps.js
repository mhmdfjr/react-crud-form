import React, { Component } from 'react'

export default class ThrowProps extends Component {
    
    // gantiNama(namaBaru) {
    //     this.setState({
    //         nama: namaBaru
    //     })
    // }
  
    render() {
        const { nama, gantiNama } = this.props
        return (
        <div>
            <h2>Operan State menjadi Props : {nama}</h2>
            <button onClick={() => gantiNama('Jarwo')}>Ganti Nama</button>
        </div>
        )
  }
}
