import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/Formatter.js";
// import currencyFormatter from "../utils/Formatter.js";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal.jsx";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const { hideCart, progress, showCheckout } = useContext(UserProgressContext);

  const handleClose = () => {
    hideCart();
  };

  const cartTotalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleGoToCheckout = () => {
    showCheckout();
  };

  return (
    <>
      <Modal
        className="cart"
        open={progress === "cart"}
        onClose={progress === "cart" ? handleClose : null}
      >
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map((item) => (
            <li key={item.id} className="cart-item">
              <p>
                {item.name} - {item.quantity} X{item.price}
              </p>
              <p className="cart-item-actions">
                <button onClick={() => cartCtx.deleteItem(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => cartCtx.addItem(item)}>+</button>
              </p>
            </li>
          ))}
        </ul>
        {cartCtx.items.length > 0 ? (
          <p className="cart-total">
            Total price = {currencyFormatter.format(cartTotalPrice)}
          </p>
        ) : (
          <p>Your Cart is empty Please add some orders</p>
        )}
        <p className="modal-actions">
          <button className="text-button" onClick={handleClose}>
            Close
          </button>
          {cartCtx.items.length > 0 && (
            <button onClick={handleGoToCheckout} className="button">
              Go to checkout
            </button>
          )}
        </p>
      </Modal>
    </>
  );
};

export default Cart;
