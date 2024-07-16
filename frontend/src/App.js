
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from "./UpdataPrdouct";
import Protected from './Protected';
import ProductList from './ProductList';
import ViewDetail from './ViewDetail';
import Update from './Update';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<Protected cmp={ProductList}/>}/>
          <Route path='/add' element={<Protected cmp={AddProduct}/>}/>
          <Route path='/products' element={<Protected cmp={ProductList}/>}/>
          {/* <Route path='/update' element={<Protected cmp={UpdateProduct}/>}/> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/products/product/:id' element={<ViewDetail/>}/>
          <Route path='/products/update/:id' element={<Update/>} />
          

            
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
