import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContackUs from './pages/contackUs/ContackUs';
import Home from './pages/home/Home';
import Method from './pages/method/Method';
import NotFound from './pages/notFound/NotFound';
import Products from './pages/products/Products';
import Services from './pages/services/Services';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/method" element={<Method />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contack" element={<ContackUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
