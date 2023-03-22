// import {useContext} from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import Header from './Component/Header'
import UserInfo from './Component/UserInfo'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from './Pages/User'
// import { AuthContext } from './Context/AuthContext'


function App() {
  
  

  
  return (
   
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={
        
          <Home/>
        } 
          />
        <Route path='/login' element={<Login/>}/>
        <Route path='/userinfo' element={<UserInfo/>}/>
        <Route path='/user' element={<User/>}/>


      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App