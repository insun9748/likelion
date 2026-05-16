import React from 'react';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./components/Main.jsx"
import Footer from "./components/Section/Footer.jsx"
import Nav from  "./components/Section/Nav.jsx"

const App = () => {
  return (
    <div>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default App