import { Fragment} from 'react';
import './CookPage.css';
import Nav from '../EmployeeNav/Navpage';
import ListMeals from '../CookPage/ListMeals';
const CookPage = () => {
 

  return (
    <Fragment>
      <Nav/>
      <ListMeals/>
    </Fragment>
  );
};

export default CookPage;
