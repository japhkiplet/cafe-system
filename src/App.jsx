import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Table from './pages/Table'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
