import './App.css';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Slider from './Component/Slider';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <NavBar/>
    <Slider/>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </div>
      <Footer/></div>
    </BrowserRouter>
  );
}

export default App;
