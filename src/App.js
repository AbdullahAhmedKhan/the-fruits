import './App.css';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import NotFound from './Component/NotFound/NotFound';
import Blogs from './Component/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
