import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newssetter from './components/Newssetter'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <Analytics />
     <Newssetter />
     <Cards />
     <Footer />
    </div>
  )
}

export default App
