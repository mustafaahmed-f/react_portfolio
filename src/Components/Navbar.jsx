import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [section, setSection] = useState("home");
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div
          className={`${styles.itemContainer} ${
            section === "home" ? styles.active : ""
          }`}
          onClick={() => setSection("home")}
        >
          <span className={styles.popup}>Home</span>
          <a className={styles.item} href="#home">
            🏠
          </a>
        </div>

        <div
          className={`${styles.itemContainer} ${
            section === "about" ? styles.active : ""
          }`}
          onClick={() => setSection("about")}
        >
          <span className={styles.popup}>About</span>
          <a className={styles.item} href="#about">
            🙎🏻‍♂️
          </a>
        </div>

        <div
          className={`${styles.itemContainer} ${
            section === "skills" ? styles.active : ""
          }`}
          onClick={() => setSection("skills")}
        >
          <span className={styles.popup}>Skills</span>
          <a className={styles.item} href="#skills">
            🛠
          </a>
        </div>

        <div
          className={`${styles.itemContainer} ${
            section === "portfolio" ? styles.active : ""
          }`}
          onClick={() => setSection("portfolio")}
        >
          <span className={styles.popup}>Portfolio</span>
          <a className={styles.item} href="#portfolio">
            🍱
          </a>
        </div>

        <div
          className={`${styles.itemContainer} ${
            section === "contact" ? styles.active : ""
          }`}
          onClick={() => setSection("contact")}
        >
          <span className={styles.popup}>Contact</span>
          <a className={styles.item} href="#contact">
            📧
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
