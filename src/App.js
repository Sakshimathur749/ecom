import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/footer';
import Shop from './pages/Shop';
import ShopCategory from './pages/Shopcategory';
import Product from './pages/Product';
import Login from './pages/loginSignup';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import men_banner from './Components/Assets/banner_mens.png';
import kid_banner from './Components/Assets/banner_kids.png';
import women_banner from './Components/Assets/banner_women.png';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
