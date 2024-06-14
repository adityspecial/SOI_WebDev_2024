// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Signup from './components/Signup';
import Main from './components/Main';
import Login from './components/Login';
import Login from './components/Login';
import './index.css';
import Home from "./components/Home"


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
