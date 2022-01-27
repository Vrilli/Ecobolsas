import React, { Component } from 'react';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import App from "../containers/App.js"
import Ecobolsas from "../components/Ecobolsas";

export default class AppRouter extends Component {

    render() { 
   return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
      </Routes>
     </BrowserRouter>
   )
  }
}


