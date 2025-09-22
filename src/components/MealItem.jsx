import { useContext } from "react";
import { currencyFormatter } from "../utils/Formatter";
import CartContext from "../store/CartContext";

const MealItem = ({ meals }) => {
  const cartCtx = useContext(CartContext);
  const handleAddMealToCart = () => {
    // console.log("clicked");
    cartCtx.addItem(meals);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3001/${meals?.image}`} alt={meals.name} />
        <div>
          <h3>{meals.name}</h3>
          <h4 className="meal-item-description">{meals.description}</h4>
          <h3 className="meal-item-price">
            {currencyFormatter.format(meals.price)}
          </h3>
        </div>
        <p>
          <button onClick={handleAddMealToCart} className="button">
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
