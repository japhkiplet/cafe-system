import './contact.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { useContext } from "react";
import  { Context } from '../context/Context'
import { ApiDomain } from '../utils/utils';

const Contact = () => {
  const { user } = useContext(Context)
  const schema = yup.object().shape({
      description: yup.string().required("description is required"),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
      Axios.post(`${ApiDomain}/comments`, data,
          { headers: { "Authorization": `${user.token}` } })
          .then((response) => {
              response.data.message && alert(response.data.message)
              reset();
          })
          .catch(({ response }) => {
              alert(response.data.error)
              // console.log(response)
          });
  };
  return (
    <div className="contact-container">
      <h3>what our customers says about us!</h3>
      <div className="contact_details">
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>nice cafe</p>
        </div>
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>classic coffee</p>
        </div>
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>nice latte</p>
        </div>
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>amazing tea</p>
        </div>
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>nice cafe</p>
        </div>
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>nice cafe</p>
        </div>
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>nice cafe</p>
        </div>
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>nice cafe</p>
        </div>
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>nice cafe</p>
        </div>
        <div className="details_des">
          <h4>Name: John Doe</h4>
          <p>nice cafe</p>
        </div>
      </div>
      <div className="formWrapper">
        <p>please leave us your comment🤩😎</p>
            <form onSubmit={handleSubmit(onSubmit)} className="Form" >
                <textarea
                    {...register("description")}
                    name="description"
                    id="description"
                ></textarea>
                <p>{errors.description?.message}</p>
                <input className="submitBtn" type="submit" value="save" />
            </form>
        </div>

   </div>
  )
}

export default Contact