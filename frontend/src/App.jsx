import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import Order from './pages/Order'
import Booking from './pages/Booking'
import Menu from './pages/Menu'
import './App.css'

function App() {
  

  return (
    <div className='main-body'>
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
      
    </div>
  )
}

export default App
