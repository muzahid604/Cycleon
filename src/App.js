import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Home/Footer/Footer';
import Header from './Component/Home/Header/Header';
import Home from './Component/Home/Home/Home';
import Items from './Component/Items/Items';
import Login from './Component/SignOption/Login/Login';
import Register from './Component/SignOption/Register/Register';
import RequireAuth from './Component/SignOption/RequierAuth/RequierAuth';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/items" element={<RequireAuth>
          <Items></Items>
        </RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
