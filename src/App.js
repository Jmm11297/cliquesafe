import React from 'react';
import './App.css';
import Nav from "./components/nav";
import Home from "./components/home";
import Footer from "./components/footer";
import Map from "./components/map";
import Events from "./components/events";
import Add from "./components/add";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Nav></Nav>

      <Home></Home>
      <Map></Map>
      <Events></Events>
      <Add></Add>
      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}

export default App;
