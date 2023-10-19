import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const onShownHandler = () => {
    setCartIsShown(true);
  };

  const onCloseHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={onCloseHandler} />}
      <Header onShowCart={onShownHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
