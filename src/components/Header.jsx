import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const { showCart, hideCart, hideCheckout, showCheckout, progress } =
    useContext(UserProgressContext);

  const handleSubmitCart = () => {
    showCart();
  };

  const totalCartItems = cartCtx.items.reduce((totalNoOfItems, item) => {
    return totalNoOfItems + item.quantity;
  }, 0);
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="ReactFood" />
          <h1>React Food</h1>
        </div>

        <button onClick={handleSubmitCart} className="text-button">
          Cart({totalCartItems})
        </button>
      </header>
    </>
  );
};

export default Header;
