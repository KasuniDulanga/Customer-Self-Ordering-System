import classes from './Usercard.module.css'
import profile from '../Images/profile.png'

function UserCard(props) {


  return (
    <div className={classes.detailcard}>
      <ul >
      <div className={classes.userimg}>
        <img src={profile} alt='food' />
      </div>
          <div className={classes.name}>ID: {props.Id}</div>
          <div className={classes.name}>Name: {props.fName} {props.lName}&emsp;</div>
          <div className={classes.name}>Job Role: {props.Role}</div>
      
      </ul>
    </div>

  );
}

export default UserCard;