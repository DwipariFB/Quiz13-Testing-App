import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import User from './pages/Users';
import NavbarPage from './pages/NavbarPage';

function App() {
  return (
    <div className="App">
    <NavbarPage/>
      {/* <Home/> */}
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/user' element={<User/>}/>
     </Routes>
    </div>
  );
}

export default App;
