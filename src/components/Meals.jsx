import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};

const Meals = () => {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  //   fetch("http://localhost:3000/meals")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((res) => console.log(res));

  // useEffect(() => {
  //   fetch("http://localhost:3001/meals")
  //     .then((response) => response.json())
  //     //   .then((res) => console.log(res));
  //     .then((res) => setLoadedMeals(res));
  // }, []);
  //   console.log(loadedMeals);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3001/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error}></Error>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meals={meal}></MealItem>
        // <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
};
export default Meals;
