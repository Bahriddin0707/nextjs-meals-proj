import Image from "next/image";
import Link from "next/link";

import styles from "./main-header.module.css";

import logo from "../../assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" priority />
          Super Meals
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">All Meal</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
