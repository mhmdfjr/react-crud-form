import React from 'react'
import Table from 'react-bootstrap/Table';

const TableComponent = ({makanan, editData, deleteData}) => {
  return (
    <>
    <h2>Daftar Makanan</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanan.map((makanan, index) => {
          return(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp.{makanan.harga}</td>
              <td>
                <button className='btn btn-warning mr-2' onClick={() => editData(makanan.id) }>Edit</button>
                <button className='btn btn-danger' onClick={() => deleteData(makanan.id) }>Hapus</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    <hr />
    </>
  );
}

export default TableComponent