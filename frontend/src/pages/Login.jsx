import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Login.css'



const login = () => {
  const navigate = useNavigate();
  const Schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (data) => {
    Axios.post("http://localhost:8081/auth/login", data)
      .then((data) => {
        if (data.token) {
          navigate("/");
        }
      })
      .catch((e) => {
        alert('unauthorised user',e);
      });
  };

  return (
    <div className="login-container">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <div className="input-control">
          <input type="text" placeholder="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="input-control">
          <input
            type="password"
            placeholder="password"
          
            {...register("password")}
          />
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
        <input type="submit" value="Login" className="btn" />
          <div className="navigation">
            <p>I don't have an account</p>
            <Link to="/signup">Sign-Up</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login