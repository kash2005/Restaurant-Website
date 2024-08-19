import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import HotDessert from './components/HotDessert/HotDessert'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-white2 text-dark'>
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
    </div>
  )
}

export default App