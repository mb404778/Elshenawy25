import React from "react";
import Navbar from "./Navbar"
import Header from "./Header";
import About from "./About";
import Device from "./Device";
import Age from "./Age";
import Download from "./Download";
import Append from "./Append";
import Footer from "./Footer";
import "../App.css"
function HomePage (){
  return(
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Device/>
      <Age/>
      <Download/>
      <Append/>
      <Footer/>
    </div>
  )
}

export default HomePage;