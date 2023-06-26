import {Link, useNavigate} from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa"
import { useContext } from "react";
import  { Context } from '../context/Context'



const Header = () => {
  const navigate = useNavigate()
  const { user, dispatch } = useContext(Context);
  // const user = localStorage.getItem("user")
    const handleLogout = () => {
      // dispatch({ type: "LogOut"  });
      localStorage.clear()
      navigate("/login");
    }

  return (
    <div className='navbar'>
      <div className="blog__logo">
        <span>Cafe</span>
      </div>
      <div className='blog'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/booking'>Reservation</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Testimonials</Link>
      </div>
      <div className="blog__sign"> 
      {!user && (
        <Link to='/login'><button className="btn-login">Login</button></Link>
        )
        
      } 
      {user && (
         <button onClick={handleLogout} style={{ color: "yellow", background: "transparent",border: "none", outline: "none", height: '30px',width: '100%' }}><FaSignOutAlt id="icons" /> Logout</button>
         )
      }        
           
          
           
        </div>
    </div>
  )
}

export default Header