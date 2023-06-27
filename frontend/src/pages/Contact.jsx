import './contact.css';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { ApiDomain } from '../utils/utils';

const Contact = () => {
  const [comments, setComments] = useState([]);
  
  const schema = yup.object().shape({
    description: yup.string().required("Description is required"),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Axios.post(`${ApiDomain}/comments`, data)
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        }
        reset();
        fetchComments(); 
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };

  const fetchComments = () => {
    Axios.get(`${ApiDomain}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchComments(); 
  }, []);

  return (
    <div className='contact-container'>
      <div className="formWrapper">
      <p>please leave us your comment🤩😎</p>
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <textarea
          {...register("description")}
          name="description"
          id="description"
        ></textarea>
        <p>{errors.description?.message}</p>
        <input className="submitBtn" type="submit" value="save" />
      </form>

      <div className="commentsWrapper">
        <h3>Comments:</h3>
        <div  className="comment">
        {comments.map((comment) => (
            <p key={comment.id}>{comment.description}</p>
            ))}
          </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
