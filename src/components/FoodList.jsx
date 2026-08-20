import FoodDetails from "./FoodDetails";
import styles from "./foodlist.module.css";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <>
      <div className={styles.container}>
        {foodData.map((food) => (
          <div className={styles.card} key={food.id}>
            <img className={styles.image} src={food.image} alt={food.title} />

            <div className={styles.content}>
              <h2>{food.title}</h2>

              <button
                onClick={() => setFoodId(food.id)}
                className={styles.button}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
