import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Layout from './Layout'
import PageNotFound from './componants/pages/PageNotFound';
import Product from './componants/pages/Product';
import Gallery from './componants/pages/Gallery';
import Feedback from './componants/pages/Feedback';
import Cart from './componants/pages/Cart';
import Checkout from './componants/pages/Checkout';
import Ordersucessful from './componants/pages/Ordersucessful';
import './scripts'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/ordersucessful' element={<Ordersucessful/>}></Route>
      </Routes>
    </Router>
  </StrictMode>,
)
