import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Footer from './Component/Home/Footer/Footer';
import Header from './Component/Home/Header/Header';
import Home from './Component/Home/Home/Home';
import AddItems from './Component/Items/AddItems/AddItems';
import Items from './Component/Items/Items';
import ManageItems from './Component/Items/ManageItems/ManageItems';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/SignOption/Login/Login';
import Register from './Component/SignOption/Register/Register';
import RequireAuth from './Component/SignOption/RequierAuth/RequierAuth';
import UpdateItem from './Component/UpdateItem/UpdateItem';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/items/:itemsId' element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>
        }></Route>
        <Route path="/items" element={
          <RequireAuth>
            <Items></Items>
          </RequireAuth>
        }></Route>
        <Route path="/addItems" element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path="/manageItems" element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
