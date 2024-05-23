import './App.css';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Home from './componant/home';
import Addprofile from './componant/addprofile';
import Upadateprofile from './componant/upadateprofile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/addprofile' element={<Addprofile />}/>
        <Route path='/updateprofile/:id' element={<Upadateprofile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
