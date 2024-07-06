import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import axios from 'axios';
import { UserContextProvider } from './context/userContext';
import Logout from './pages/Logout';
import UpdateUser from './pages/UpdateUser';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Dashboard />} />
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/update' element={<UpdateUser/>}/>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
