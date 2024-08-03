import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
    
const Survey = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const navigate =  useNavigate() ; 
  
  const sendSurvey = (e) => {
    e.preventDefault();
    // do something with the data
    navigate('/home');
  }
  const sendResult = (e) => {
    e.preventDefault();
    // do something with the data
    navigate('/result');
  }
  const sendBack = (e) => {
    e.preventDefault();
    // do something with the data
    navigate(-1);
  }
    
  return (
    <div>

    <form onSubmit={ sendSurvey }>
      <label>Your Name:</label>
      <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
      <label>Your Comment:</label>
      <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
      <input type="submit" value="Submit Survey" />
    </form>

    <form onSubmit={ sendResult }>
      <label>Your Name:</label>
      <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
      <label>Your Comment:</label>
      <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
      <input type="submit" value="Submit Survey" />
    </form>
    <form onSubmit={ sendBack }>
      <label>Your Name:</label>
      <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
      <label>Your Comment:</label>
      <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
      <input type="submit" value="Submit and Back " />
    </form>
    </div>
  );
}
export default Survey ;