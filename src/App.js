import './App.css';
import Header from './Pages/Shared/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import NotFound from './Pages/NotFound/NotFound';
import ProductUpdate from './Pages/ProductUpdate/ProductUpdate';

function App() {
  return (
    <div>
        <Header> </Header>
         
         <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/home' element={<Home />}> </Route>
            <Route path='/addproduct' element={<AddProduct />}> </Route>
            <Route path='/manageproduct' element={<ManageProduct />}> </Route>
            <Route path='/product/:id' element={< ProductUpdate />}> </Route>
            <Route path='*' element={<NotFound />}> </Route>
         </Routes>


    </div>
  );
}

export default App;
