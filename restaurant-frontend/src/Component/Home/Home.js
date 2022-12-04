import NavbarComp from '../Navbar/NavbarComp';
import { Fragment } from 'react';
import mealsImg from '../Images/meals.jpg';
import '../Home/Home.css';

function Home() {
    return (
        <div className="App">
            <Fragment>
                <NavbarComp />
                <div className='main-img'>
                    <img src={mealsImg} alt='A table full of delicious food!' />
                </div>
                <section className='summary'>
                    <h1>Welcome To<br>
                    </br>MacFood Restaurant</h1>
                    <br></br>
                    <p>
                        come and eat well with our delicious foods.
                    </p>
                    <div className='actions'>
                        <button>Place Order</button>
                    </div>

                </section>
            </Fragment>



        </div>
    );
}

export default Home;
