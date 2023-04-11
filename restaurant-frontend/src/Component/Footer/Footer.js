import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import "../Footer/Footer.css"
import CommentService from '../Services/CommentService';

export default function Footer() {
  const [comment,setComment] = useState('');
  const navigate = useNavigate();

  const createComment = (e) => {
    console.log({comment :comment}); //String cannot directly pass to back end , therefore created string object
    CommentService.createComment({ comment: comment }).then((response) => {
      console.log(response.data)
      navigate('/');
      setComment('');

  }).catch(error => {
      console.log(error)
  })
  }

  return (
    <footer className="footer text-center">
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-md-4">
            <div className="footer-page-links row">
              <ul className="m-0 mb-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/" rel="noreferrer">Terms</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form">
            <div className="input-group input-group-sm w-75 mx-auto">
              <input 
              type="text" 
              className="form-control shadow-none send-text" 
              placeholder="Comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              ></input>
              <div className="input-group-append input-group-sm">
                <button className="btn btn-outline-light shadow-none send-text" type="button" onClick={(e) => createComment(e)}><i className="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-4">
            <div className="social-media row">
          
              <div className="text-center copyright  pt-2 pb-3">© 2023 Copyright:<a href="/"> MacFood</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
