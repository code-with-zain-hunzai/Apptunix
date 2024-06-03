import { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection'
import Job from './components/Job';
import './App.css'
import Award from './components/Award';
import FeaturedSlider from './components/FeaturedSlider';
import Excellence from './components/Excellence';
import Services from './components/Services';
import Partner from './components/Partner';
import Industries from './components/Industries';
import Team from './components/Team';
import LogoSlider from './components/LogoSlider';
import AppBusniess from './components/AppBusniess';
import Certificate from './components/Certificate';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);
  return (
    <>
    <Header/>
      <Navbar />
      < MainSection />
      <Job />
      <Award />
      <FeaturedSlider />
      <Excellence />
      <Services />
      <Partner />
      <Industries />
      <Team />
      <LogoSlider />
      <AppBusniess />
      <Certificate />
      <Footer/>
      {/* mix-blend-luminosity */}
    </>
  )
}

export default App
