// App.js
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import './index.css';

function App() {

  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
}

export default App;
