import React, { Fragment } from 'react'
import Footer from '../Footer/Footer';
import NavbarComp from '../Navbar/NavbarComp';
import "../About/Aboutus.css";

export default function Aboutus() {
  return (
    <Fragment>
      <NavbarComp
                    link1="Home"
                    link2 ="AboutUs"
                    link3 ="Events"
                    link4="Login" />
     <Footer/>
    </Fragment>
  )
}
