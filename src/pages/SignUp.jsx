import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Login.css'


const SignUp = () => {

const Schema =yup.object().shape({
  userName: yup.string().required("This field is required!"),
  
  email: yup.string().email('Invalid email')
  .required('Email is required'),
  phoneNo: yup.string().required('Phone number is required')
  .matches(
    /^\+?[1-9]\d{1,14}$/,
    'Phone number is invalid. It should start with a plus sign (+) and can contain up to 15 digits.'
  ),
  passWord: yup.string()
  .required('Password is required')
  .min(6, 'Password must be at least 6 characters long')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one digit'),

  confirmPassword: yup.string().oneOf([yup.ref('passWord'),null]).required('please confirm your password!'),
})

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver :yupResolver(Schema)})

  const onSubmit = (data) =>{
    console.log(data)
  }



  return (
    <div className="container">
     <form id="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Register with us!</h3>
         <div class="input-control">
              <input type="text" placeholder="username" {...register("userName")} />
              <p>{errors.userName?.message}</p>              
          </div>
         
         
         <div class="input-control">
              
              <input type="text" placeholder="email" {...register("email")} />
              <p>{errors.email?.message}</p>    
                
          </div>
         <div class="input-control">
              
              <input type="tel" placeholder="tel" {...register("phoneNo")} />
              <p>{errors.phoneNo?.message}</p>  
                
          </div>
          
         <div class="input-control">
              
              <input type="password" placeholder="password" {...register("passWord")} />
              <p>{errors.password?.message}</p>  
                
          </div>
          
         <div class="input-control">
              
              <input type="password" placeholder="confirm password" {...register("confirmPassword")} />
              <p>{errors.confirmPassword?.message}</p>
                
          </div>

          <input type="submit" value="Submit"  className="btn"/>
          
       </form>
    </div>
  )
}

export default SignUp
