import React from 'react'
import "../Footer/Footer.css"

export default function Footer() {
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
                  <a href="/aboutus">About</a>
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
              <input type="text" className="form-control shadow-none send-text" placeholder="Comments" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
              <div className="input-group-append input-group-sm">
                <button className="btn btn-outline-light shadow-none send-text" type="button"><i className="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-4">
            <div className="social-media row">
              {/* <ul className="mb-0">
              <li>
                <a href="https://twitter.com/learnWitheNET?t=SgIQqCTq5IBygEoVj4AjLA&s=08" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="https://www.facebook.com/Enet.RSLUP" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/enet.rslup/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="/" target="_blank"><i className="fas fa-globe-asia"></i></a>
              </li>
            </ul> */}
              <div className="text-center copyright  pt-2 pb-3">© 2023 Copyright:<a href="/"> MacFood</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
