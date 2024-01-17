import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
