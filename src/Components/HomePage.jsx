import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <section id="home" className={styles.home}>
      <header>
        <div className={styles.headerContainer}>
          <h4 className={styles.welcomeKeyword}>Welcome</h4>
          <h1 className={styles.myName}>
            I'm <span>Mustafa</span> Ahmed
          </h1>
          <h2 className={styles.jobTitle}>Mern stack developer</h2>
        </div>
      </header>
    </section>
  );
}

export default HomePage;
