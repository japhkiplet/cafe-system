import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className='navbar'>
      <div class="blog__logo">
        <span>Cafe</span>
      </div>
      <div className='blog'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div class="blog__sign">          
           <Link to='/login'><button class="btn-login">Login</button></Link>
           <Link to='/signup'><button class="btn " >Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Header