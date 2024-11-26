import styles from "./loading.module.css";

function MealsLoadingPage() {
  return <h3 className={styles.loading}>Meals are still fetching...</h3>;
}

export default MealsLoadingPage;
