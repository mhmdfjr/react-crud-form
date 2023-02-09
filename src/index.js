import React from 'react';
import ReactDOM from 'react-dom/client';
// import LifeCycle from './basic/LifeCycle';
// import App from './basic/App';
// import StateProps from './basic/StateProps';
// import Map from './basic/Map';
import Crud from './crud';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
);