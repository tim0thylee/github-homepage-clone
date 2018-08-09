import React, { Component } from 'react';
import './App.css';
// import HeaderDemo from "./Components/HeaderDemo";
import Bodysection from "./Components/Bodysection/Bodysection.js"
import Footer from "./Components/Footer/Footer.js";
import Header from "./Components/Header/Header"





class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <HeaderDemo /> */}
        <Bodysection/>
        <Footer />
      </div>
    );
  }
}

export default App;
