import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Login.css'



const login = () => {

  const Schema =yup.object().shape({
   
    email: yup.string().email('Invalid email')
    .required('Email is required'),
   
    passWord: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'),
  
  })
  
    const {register, handleSubmit, formState: { errors }} = useForm({
      resolver :yupResolver(Schema)})
  
    const onSubmit = (data) =>{
      console.log(data)
    }

  return (
    <div className="login-container">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
       <div class="input-control">
              
              <input type="text" placeholder="email" {...register("email")} />
              <p>{errors.email?.message}</p>    
                
          </div>
      <div class="input-control">
              
              <input type="password" placeholder="password" {...register("passWord")} />
              <p>{errors.password?.message}</p>  
                
          </div>
          <div className="remember-forgot">
           <div className="label">
             <input type="checkbox" />
              <p>Remember Me</p>
            </div>
           <Link to="#">Forgot Password</Link>
          </div>
          <div className="login-buttons">
            <input type="submit" value="Login"  className="btn"/>
            <div className="navigation">
              <p>I don't have an account</p>
              <Link to='/signup'>Sign-Up</Link>
            </div>
          </div>

          
       </form>
          
    </div>
  )
}

export default login