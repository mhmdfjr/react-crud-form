import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormComponent = ({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Makanan" : "Tambah Makanan"}</h2>
      <Form.Group className="mb-3" controlId="nama">
        <Form.Label>Nama Makanan</Form.Label>
        <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="deskripsi">
        <Form.Label>Deskripsi</Form.Label>
        <Form.Control as="textarea" name="deskripsi" rows={3} value={deskripsi} onChange={(event) => handleChange(event)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="harga">
        <Form.Label>Harga</Form.Label>
        <Form.Control type="number" name="harga" value={harga} onChange={(event) => handleChange(event)} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormComponent