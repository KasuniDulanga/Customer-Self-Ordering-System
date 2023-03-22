import { useState } from 'react';

import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from '../store/CartProvider';

function MenuPage() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    // <section className='menuback'  style={{ backgroundColor: "black",background:"cover",margin:"0rem" }}>
    <CartProvider>
      
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
      
    </CartProvider>
    // </section>
  );
};

export default MenuPage;
