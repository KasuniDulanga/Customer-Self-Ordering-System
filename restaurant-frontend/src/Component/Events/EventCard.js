import React from "react";
import "./Events.css";

function EventCard(props) {
  return (
    <div>
      <div className="profile-area">
        <div className="containerr">
          <div className="card">
            <div className="img1">
              <img src={props.eventImage} alt="Events"></img>
            </div>
            <div className="main-text">
              <h2>{props.eventName}</h2>
              <p>{props.date}</p>
              <p>{props.venue}</p>
            </div>
            <div className="socials">
              <ul>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
