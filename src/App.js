import './App.css';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Home from './componant/home';
import Addprofile from './componant/addprofile';
import Upadateprofile from './componant/upadateprofile';
import Auth from './componant/authentication/auth';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ isAuth ? <Home /> : <Auth/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/addprofile' element={<Addprofile />}/>
        <Route path='/updateprofile/:id' element={<Upadateprofile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
