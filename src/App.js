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

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
