import React from 'react'

const makanan = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Nasgor',
        harga: 10000
    },
    {
        nama: 'Bakmi',
        harga: 14000
    },
    {
        nama: 'Rawon',
        harga: 13000
    }
];

// REDUCE
const totalBayar = makanan.reduce((totalHarga, makan) => {
    return totalHarga+makan.harga;
}, 0);

// MAP
const Map = () => {
  return (
    <div>
        <h2>Map Sederhana</h2> 
        <ul>
            {makanan.map((makan, index) => {
                return <li>{index+1}. {makan.nama} - Harga {makan.harga}</li>
            })}
        </ul>

        <h2>Map Filter (lebih dari 12000)</h2>
        <ul>
            {makanan.filter((makan) => makan.harga > 12000).map((makan, index) => {
                return <li>{index+1}. {makan.nama} - Harga {makan.harga}</li>
            })}
        </ul>

        <h3>Total Harga : {totalBayar}</h3>
    </div>
  )
}

export default Map