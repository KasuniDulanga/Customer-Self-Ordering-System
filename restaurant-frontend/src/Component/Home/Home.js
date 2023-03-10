import NavbarComp from '../Navbar/NavbarComp';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import mealsImg from '../Images/homeimage.jpg';
import '../Home/Home.css';
import Footer from '../Footer/Footer';

function Home() {
    const navigate = useNavigate();

    const NavigateToMenuPage = () => {
        navigate('/menu');
    };

    return (
        <div className="App">
            <Fragment>
                <NavbarComp
                    link1="Home"
                    link2 ="AboutUs"
                    link3 ="Events"
                    link4="Login" />
                <div className='home'>
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
                        <button onClick={NavigateToMenuPage}>Place Order</button>
                    </div>

                </section>
                <br></br>
                <Footer/>
                </div>
            </Fragment>



        </div>
    );
}

export default Home;
