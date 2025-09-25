import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Highlight from './components/Highlight'
import Testimonials from './components/Testimonials'
import Information from './components/Information'
import Footer from './components/Footer'

import Menu from './components/Menu';
import About from './components/About'
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Highlight />
              <Testimonials />
              <Information />
              <Footer />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order_online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
