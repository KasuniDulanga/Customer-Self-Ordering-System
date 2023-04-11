import classes from './Usercard.module.css'

function UserCard(props) {


  return (
    <div className={classes.detailcard}>
      <ul >
     
          <div className={classes.name}>ID: {props.Id}</div>
          <div className={classes.name}>Name: {props.fName} {props.lName}&emsp;</div>
          <div className={classes.name}>Job Role: {props.Role}</div>
      
      </ul>
    </div>

  );
}

export default UserCard;