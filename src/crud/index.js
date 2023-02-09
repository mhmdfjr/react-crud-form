import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import TableComponent from "./TableComponent";
import FormComponent from "./FormComponent";

export default class Crud extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       makanan: [],
       nama: "",
       deskripsi: "",
       harga: 0,
       id: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // console.log('Data: ', this.state)
    if(this.state.id === "") {
      this.setState({
        makanan: [
          ...this.state.makanan,
          {
            id: this.state.makanan.length+1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga
          }
        ]
      })
    } else {
      const makananNotEdit = this.state.makanan
      .filter((makanan) => makanan.id !== this.state.id)
      .map((filterMakanan) => {
        return filterMakanan
      })
      
      this.setState({
        makanan: [
          ...makananNotEdit,
          {
            id: this.state.makanan.length+1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga
          }
        ]
      })
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: ""
    })
  }

  editData = (id) => {
    // console.log('ID : ', id)
    const makananEdit = this.state.makanan
    .filter((makanan) => makanan.id === id)
    .map((filterMakanan) => {
      return filterMakanan
    })

    this.setState({
      nama: makananEdit[0].nama,
      deskripsi: makananEdit[0].deskripsi,
      harga: makananEdit[0].harga,
      id: makananEdit[0].id
    })
  }

  deleteData = (id) => {
    // console.log('Hapus id :', id)
    const makananNew = this.state.makanan
    .filter((makanan) => makanan.id !== id)
    .map((filterMakanan) => {
      return filterMakanan
    })

    this.setState({
      makanan: makananNew
    })
  }

  render() {
    console.log(this.state.makanan)
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <TableComponent makanan={this.state.makanan} editData={this.editData} deleteData={this.deleteData} />
          <FormComponent {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}
