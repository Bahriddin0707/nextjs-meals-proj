import Image from "next/image";
import styles from "./page.module.css";

import { getMealBySlug } from "@/lib/meals";
import { notFound } from "next/navigation";
import Link from "next/link";



export async function generateMetadata({params}){
    const meal = await getMealBySlug(params.mealSlug);

    if (!meal) {
        return {
            title: "Meal Not Found",
            description: "The requested meal could not be found.",
        };
    }

    return {
        title: meal.title,
        description: meal.summary,
    };
}



async function MealDetailsPage({ params  }) {
  const { mealSlug } = params;
  const meal = await getMealBySlug(mealSlug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <div className="go-back-btn">
        <Link href="/meals">Go back to meals list</Link>
      </div>

      <header className={styles.header}>
        <div className={styles.image}>
          <Image
            src={`https://bahriddin-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com/images/${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>

        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            Creator: <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailsPage;
