import React from 'react';
import './Notification.css';

function Notification() {
  return (
    <div className='notifier'>
        <div className='placeholder'></div>
        <div className='notifier-text'>Order status</div>
        <div className="bell fa fa-bell"></div>
        {/*place holder*/}
        <div className='placeholder'></div>
    </div>
  )
}

export default Notification