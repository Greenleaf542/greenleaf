import React from 'react'
import Header from './components/Navbar/Header'
import Banner from './components/Banner/Banner'
import Service from './components/Service/Service'
import Special from './components/Specialzation/Special'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Service/>
      <Special/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
