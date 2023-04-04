import React, { Fragment } from 'react'
import "../Events/Events.css";
// import Footer from '../Footer/Footer';
import NavbarComp from '../Navbar/NavbarComp';
import mealsImg from '../Images/EventsImages/event1.png';
import mealsImg2 from '../Images/EventsImages/event2.jpg';
import EventCard from './EventCard';


export default function Event() {
  return (
    <Fragment>
      <NavbarComp
        link1="Home"
        link3="Events"
        link4="Login" />
      <div className='withoutNavbar'>
      <div className="containerr text-center pb-4">
        <div className="slide">
          <div className="card-box">
            <EventCard eventName='Food Fiesta' venue='At Dehivala' date='20th march' eventImage={mealsImg}/>
            <EventCard eventName='Food Fiesta' venue='At Dehivala' date='20th march' eventImage={mealsImg}/>
            <EventCard eventName='Food Fiesta' venue='At Dehivala' date='20th march' eventImage={mealsImg2}/>
            <EventCard eventName='Food Fiesta' venue='At Dehivala' date='20th march' eventImage={mealsImg}/>
            <EventCard eventName='Food Fiesta' venue='At Dehivala' date='20th march' eventImage={mealsImg2}/>
          </div>
        </div>
      </div>
      </div>
 
    </Fragment>
  )
}
