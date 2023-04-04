import NavbarComp from '../Navbar/NavbarComp';
import { Nav } from 'react-bootstrap';
import { Fragment } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import mealsImg from '../Images/homeimage.jpg';
import '../Home/Home.css';
import Footer from '../Footer/Footer';
import Notification from '../Navbar/Notification';

function Home() {
    const navigate = useNavigate();

    const NavigateToMenuPage = () => {
        navigate('/menu');
    };

    const loc_storage_order_ID =localStorage.getItem("macfood_order_ID");
    return (
        
        <div className="App">
            <Fragment>
                <NavbarComp
                    link1="Home"
                    link3 ="Events"
                    link4="Login" 
                    statusButton = {loc_storage_order_ID ?  (<Nav.Link className='bg-brown' as={Link} to="/orderdetails"><Notification/></Nav.Link>): null}/>
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
                </div>
                <Footer/>
            </Fragment>



        </div>
         
    );
}

export default Home;
