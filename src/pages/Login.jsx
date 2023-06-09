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
    <div className="container">
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

          <input type="submit" value="Login"  className="btn"/>
       </form>
          
    </div>
  )
}

export default login