import './index.css';
import { Route, Routes } from 'react-router-dom';
import Main from "./Main";
import ShowCategory from './categories/ShowCategory'
import Header from './header/Header';
import Login from './auth/Login';
import Register from './auth/Register';
import ProductTable from './admin/Admin';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
      <Route path="/" element = {<Main />}/>
      <Route path="/categoryById/:id" element = {<ShowCategory/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/register" element = {<Register/>}/>
      <Route path="/admin" element = {<ProductTable/>}/>
      </Routes>
    </div>
  );
}

export default App;
