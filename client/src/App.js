import Header from './components/Header.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
