import './App.css';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import NotFound from './Component/NotFound/NotFound';
import Blogs from './Component/Blogs/Blogs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Inventory from './Component/Inventory/Inventory';
import Home from './Component/Home/Home';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import AddInventory from './Component/AddInventory/AddInventory';
import MyItem from './Component/MyItem/MyItem';
import RequireAuth from './Component/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>


        <Route path='/AddInventory' element={
          <RequireAuth><AddInventory></AddInventory></RequireAuth>
        }></Route>


        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
