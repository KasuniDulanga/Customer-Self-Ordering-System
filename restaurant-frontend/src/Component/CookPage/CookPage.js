import { Fragment} from 'react';
import './CookPage.module.css';
import Nav from '../EmployeeNav/Navpage';
import ListPendingMeals from './ListPendingMeals';
const CookPage = () => {
 

  return (
    <Fragment>
      <Nav/>
      <ListPendingMeals/>
    </Fragment>
  );
};

export default CookPage;
