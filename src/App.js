import React from 'react';
import Header from './Header';
// import { Navbar }... NO DEFAULT IMPORT
import Navbar from './Navbar'; // DEFAULT IMPORT

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <h3>Hello, Wolrd!</h3>  
    </div>
  );
}

export default App;
