import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
// import UseEffect from './UseEffect'
import App from './App';
import NavBar from './NavBar';
import Rout from './Rout'
// import Form from './Form'

ReactDOM.render(
  // <UseEffect></UseEffect>,
  // <Form></Form>,
  <BrowserRouter>
  <App></App>
  <NavBar></NavBar>
  <Rout></Rout>
  </BrowserRouter>,
  document.getElementById('root')
);

