import React, { Component } from 'react'
import SublifeCycle from './SublifeCycle'

export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         makanan: 'Nasgor',
         data: {},
         tampilHalamanSub: false
      }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data: json
                })
            })
    }

    ubahMakanan(value) {
        this.setState({
            makanan: value
        })
    }
    
    render() {
        return (
        <div>
            <h2>{this.state.makanan}</h2>
            {this.state.tampilHalamanSub && <SublifeCycle ubahMakanan={(value) => this.ubahMakanan(value)} />}
            <button onClick={() => this.setState({tampilHalamanSub: !this.state.tampilHalamanSub})}>Tampil Halaman Sub</button>
        </div>
        )
  }
}
