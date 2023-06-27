import './contact.css';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { ApiDomain } from '../utils/utils';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const Contact = () => {
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const schema = yup.object().shape({
    description: yup.string().required("Description is required"),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (editingCommentId) {
      handleUpdateComment(editingCommentId, data.description);
    } else {
      handleCreateComment(data.description);
    }
  };

  const handleCreateComment = (description) => {
    Axios.post(`${ApiDomain}/comments`, { description })
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

  const handleUpdateComment = (commentId, description) => {
    Axios.put(`${ApiDomain}/comments/${commentId}`, { description })
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        }
        reset();
        setEditingCommentId(null);
        fetchComments();
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };

  const handleDeleteComment = (commentId) => {
    Axios.delete(`${ApiDomain}/comments/${commentId}`)
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        }
        fetchComments();
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };

  const handleEditComment = (commentId) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      reset({ description: commentToEdit.description });
      setEditingCommentId(commentId);
    }
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
          <div className='comment_section' >
            {comments.map((comment) => (
              <div key={comment.id} className="comment" >
                <p>{comment.description}</p>
                <div className='comment_btns'>
                  <button onClick={() => handleDeleteComment(comment.id)} style={{border: "none", width:"50px", color:"brown",borderRadius:"5px"}}><AiFillDelete/></button>
                  <button onClick={() => handleEditComment(comment.id)} style={{border: "none", width:"50px", color:"green",borderRadius:"5px"}}><AiFillEdit/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
