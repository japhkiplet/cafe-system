import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";
import './Login.css'


const SignUp = () => {
const navigate = useNavigate()
const Schema =yup.object().shape({
  username: yup.string().required("This field is required!"),
  
  email: yup.string().email('Invalid email')
  .required('Email is required'),
  
  password: yup.string()
  .required('Password is required')
  .min(6, 'Password must be at least 6 characters long')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one digit'),

  confirmPassword: yup.string().oneOf([yup.ref('password'),null]).required('please confirm your password!'),
})

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver :yupResolver(Schema)})

  const onSubmit = (data) =>{
    Axios.post('http//localhost:8081/auth/register',data)
     .then((response) =>{
      response.data.message && alert(response.data.message);
      navigate('/login');
     })
     .catch((error) =>{
      alert (response.data.error);
     });
  }



  return (
    <div className="login-container">
     <form id="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Register with us!</h3>
         <div className="input-control">
              <input type="text" placeholder="username" {...register("username")} />
              <p>{errors.username?.message}</p>              
          </div>
         
         
         <div className="input-control">
              
              <input type="text" placeholder="email" {...register("email")} />
              <p>{errors.email?.message}</p>    
                
          </div>
        
          
         <div className="input-control">
              
              <input type="password" placeholder="password" name="password" {...register("password")} />
              <p>{errors.password?.message}</p>  
                
          </div>
          
         <div className="input-control">
              
              <input type="password" placeholder="confirm password" {...register("confirmPassword")} />
              <p>{errors.confirmPassword?.message}</p>
                
          </div>
          
          <div className="remember-forgot">
           <div className="label">
             <input type="checkbox" />
              <p>I agree with Terms and Conditions</p>
            </div>
           
          </div>

          <div className="login-buttons">
            <input type="submit" value="Register"  className="btn"/>
            <div className="navigation">
              
                <p>I have an account</p>
                <Link to='/login'>login</Link>
              </div>
          </div>
          
       </form>
    </div>
  )
}

export default SignUp
