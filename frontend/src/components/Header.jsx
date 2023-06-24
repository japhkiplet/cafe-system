import {Link} from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa"
import { useContext } from "react";
import  { context } from '../context/Context'



const Header = () => {
  const { user, dispatch } = useContext(context);
  // const user = localStorage.getItem("user")
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      navigate("/signup");
    }

  return (
    <div className='navbar'>
      <div className="blog__logo">
        <span>Cafe</span>
      </div>
      <div className='blog'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        {/* <Link to='/order'>Order</Link> */}
        <Link to='/booking'>Reservation</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className="blog__sign"> 
      {!user && (<Link to='/login'><button className="btn-login">Login</button></Link>)
        
      } 
      {user && ( <Link onClick={handleLogout} style={{ color: "red" }}><FaSignOutAlt id="icons" /> Logout</Link>)
      }        
           
          
           
        </div>
    </div>
  )
}

export default Header