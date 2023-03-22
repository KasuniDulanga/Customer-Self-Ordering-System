import React, { Fragment } from 'react'
import "../Events/Events.css";
import Footer from '../Footer/Footer';
import NavbarComp from '../Navbar/NavbarComp';
import mealsImg from '../Images/EventsImages/event1.png';
import mealsImg2 from '../Images/EventsImages/event2.jpg';
export default function Event() {
  return (
    <Fragment>
      <NavbarComp
        link1="Home"
        link2="AboutUs"
        link3="Events"
        link4="Login" />
      <div className='withoutnavbar'>
      <div className="container text-center pb-4">
        <div className="slide">
          <div className="card-box">

            <div className="">
              <div className="profile-area">
                <div className="container">
                  <div className="card">
                    <div className="img1"><img src={mealsImg} alt='A table full of delicious food!'></img></div>
                    <div className="main-text">
                      <h2>Food Fiesta</h2>
                      <p>20th march</p>
                      <p>At Dehivala</p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="profile-area">
                <div className="container">
                  <div className="card">
                    <div className="img1"><img src={mealsImg2} alt='A table full of delicious food!'></img></div>
                    <div className="main-text">
                      <h2>Food Fiesta</h2>
                      <p>20th march</p>
                      <p>At Dehivala</p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="profile-area">
                <div className="container">
                  <div className="card">
                    <div className="img1"><img src={mealsImg} alt='A table full of delicious food!'></img></div>
                    <div className="main-text">
                      <h2>Food Fiesta</h2>
                      <p>20th march</p>
                      <p>At Dehivala</p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="profile-area">
                <div className="container">
                  <div className="card">
                    <div className="img1"><img src={mealsImg} alt='A table full of delicious food!'></img></div>
                    <div className="main-text">
                      <h2>Food Fiesta</h2>
                      <p>20th march</p>
                      <p>At Dehivala</p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="profile-area">
                <div className="container">
                  <div className="card">
                    <div className="img1"><img src={mealsImg} alt='A table full of delicious food!'></img></div>
                    <div className="main-text">
                      <h2>Food Fiesta</h2>
                      <p>20th march</p>
                      <p>At Dehivala</p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
     
    </Fragment>
  )
}
