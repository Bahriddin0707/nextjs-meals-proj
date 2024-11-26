import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "../components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <div className="hero">
            <h1>Meals for Foodies</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              sint aliquam, voluptate saepe maiores molestiae ex ducimus neque
              repudiandae provident debitis deserunt quis nam voluptatibus in
              distinctio ea odio, nisi quas sunt, magni necessitatibus mollitia.
              Maiores optio et possimus praesentium!
            </p>
          </div>
          <div className={styles.cta}>
            <Link href="/meals">Show Meals</Link>
            <Link href="/community">Join the Community</Link>
          </div>
        </div>

        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <h2>It's purposes</h2>
          <p>
            Food is a platform for foodies to share their favorite recipes with
            the world. Its a place to discover new dishes, and to connect with
            other food lovers.
          </p>
          <p>
            This Food platform is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why should choose?</h2>
          <p>
            Food is a platform for foodies to share their favorite recipes with
            the world. Its a place to discover new dishes, and to connect with
            other food lovers.
          </p>
          <p>
            This Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
