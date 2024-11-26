import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

function MealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}

export default MealsGrid;
