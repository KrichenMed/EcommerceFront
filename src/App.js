import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Components/Navb';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { current } from './JS/Actions/userActions';
import AddingProduct from './Pages/AddingProduct/AddingProduct';
import GettingProduct from './Pages/GettingProduct/GettingProduct';
import EditingProduct from './Pages/EditingProduct/EditingProduct';
import NotFound from './Components/NotFound';
import DepartmentPage from "./Components/DepartmentPage";
import ProductDescriptionPage from './Components/ProductDescriptionPage';
import Panier from "./Components/Panier";
function App() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.userReducer.user)
  const fix=0
  useEffect(()=>{
    dispatch(current())
  },[fix,dispatch])
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/login" element={<Login />} />}
        {<Route path="/addingProduct" element={<AddingProduct />} />}
        {<Route path="/NotFound" element={<NotFound />} />}
        {<Route path="/panier" element={<Panier />} />}
        {<Route path="/gettingProduct" element={<GettingProduct />} />}
        <Route path="/Register" element={<Register />} />
        {<Route path="/product/:_id" element={<ProductDescriptionPage />} />}
        <Route
          path="/department/:category_name"
          element={<DepartmentPage />}
        />
        {user ? <Route path="/profile" element={<Profile />} /> : null}

        <Route path="/editingProduct/:_id" element={<EditingProduct />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
