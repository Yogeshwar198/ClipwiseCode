import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Allproduct from './components/Allproduct'
import Bestprice from './components/Bestprice'
import Footer from './components/footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Allproduct />
      <Bestprice />
      <Footer />
    </div>
  )
}

export default App