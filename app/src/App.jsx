
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import "./index.css"
import Signup from './components/Signup';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Signup/>
    </Router>
  );
}

export default App;
