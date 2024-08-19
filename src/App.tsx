import Navbar from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import HotDessert from './components/HotDessert/HotDessert'
import Banner from './components/Banner/Banner'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-white2 text-dark'>
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
      <Banner />
    </div>
  )
}

export default App