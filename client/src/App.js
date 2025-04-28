
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.js';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Products from './pages/Products.js';
import SingleProduct from './components/SingleProductPage.js';

function App() {
  return (
    <Router>
        <CartProvider>
          <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/single-product/:id" element={<SingleProduct/>}/>
          </Routes>
          <Footer/>
          </div>
      </CartProvider>
    </Router>
  );
}

export default App;
