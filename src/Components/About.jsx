import { useRef } from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.aboutHeadline}>
        BIT MORE <span>ABOUT</span> ME ?
      </h2>
      <div className={styles.aboutContainer}>
        <div className={styles.imgContainer}>
          <img src="../profile 2.jpg" alt="profileImg" />
        </div>
        <div className={styles.aboutDetails}>
          <p>
            Hello! I’m Mustafa Ahmed. I'm a fresh graduated mern stack developer
            using reactJs & node.js . Capable of learning more about my field
            through my professional life in additon to learning new skills . Im
            Skilled in using HTML , CSS, JS and creating RESTful applications in
            order to deliver an immersive and engaging user experience through
            efficient web development . - seeking a position in stable company
            where I can use my skills to benifit the company .
          </p>

          <div className={styles.aboutList}>
            <ul>
              <li>
                <span>MERN stack developer: </span>ReactJs + Node.Js
              </li>
              <li>
                <span>Location: </span>Haram, Giza, Egypt
              </li>
              <li>
                <span>Age: </span>26
              </li>
            </ul>
          </div>
          <div className={styles.downloadCV}>
            <button className={styles.DownloadBtn}>
              <a href="#">Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
