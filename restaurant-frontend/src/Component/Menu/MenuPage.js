import { Fragment } from "react";
import MenuHeader from "../Menu/MenuPageHeader/MenuHeader";
import AvailableMeals from "./MealItems/AvailableMeals";




function MenuPage() {

    return (
        <Fragment>
            <MenuHeader/>
            <AvailableMeals/>
        </Fragment>
    );
}

export default MenuPage;
