import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "f52045f84f2a40099b2bfd13d671627f";

  useEffect(() => {
    if (!foodId) return;

    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();

      console.log(data);
      setFood(data);
    }

    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🍴 Food Details</h1>

      <h2 className={styles.title}>{food.title}</h2>

      <img className={styles.image} src={food.image} alt={food.title} />
      <div className={styles.info}>
        <p>
          <strong>Preparation:</strong>{" "}
          {food.preparationMinutes != null
            ? `${food.preparationMinutes} minutes`
            : "N/A"}
        </p>

        <p>
          <strong>Cooking:</strong>{" "}
          {food.cookingMinutes != null
            ? `${food.cookingMinutes} minutes`
            : "N/A"}
        </p>

        <p>
          <strong>Ready in:</strong>{" "}
          {food.readyInMinutes != null
            ? `${food.readyInMinutes} minutes`
            : "N/A"}
        </p>

        <p>
          <strong>Servings:</strong>{" "}
          {food.servings != null ? food.servings : "N/A"}
        </p>

        <p>
          <strong>Health Score:</strong>{" "}
          {food.healthScore != null ? food.healthScore : "N/A"}
        </p>

        <p>
          <strong>Vegetarian:</strong> {food.vegetarian ? "Yes" : "No"}
        </p>

        <p>
          <strong>Vegan:</strong> {food.vegan ? "Yes" : "No"}
        </p>
      </div>

      <h2 className={styles.sectionTitle}>🥕 Ingredients</h2>

      <ul className={styles.ingredients}>
        {food.extendedIngredients?.map((ingredient, index) => (
          <>
            <li key={`${ingredient.id}-${index}`}>{ingredient.original}</li>
          </>
        ))}
      </ul>

      <h2 className={styles.sectionTitle}>📖 Summary</h2>

      <div
        className={styles.summary}
        dangerouslySetInnerHTML={{
          __html: food.summary,
        }}
      />
    </div>
  );
}
