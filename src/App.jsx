import React from "react"
import './App.css'

import Photo from "./components/Photo"
import Header from "./components/Header"
import ButtonGroup from "./components/ButtonGroup"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Photo />
      <Header />
      <ButtonGroup />
      <Content />
      <Footer />
    </div>
  )
}

export default App
