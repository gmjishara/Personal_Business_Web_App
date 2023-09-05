import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <div className={styles.homeTitle}>
          <h1>Better design</h1>
          <h1>for your digital</h1>
          <h1>products.</h1>
        </div>
        <div>
          <p>Turning your idea into reality. We bring together</p>
          <p>the teams from the global tech induxtry.</p>
        </div>
        <button className="homeButton">See Our Works</button>
      </div>

      <div>
        <Image src="/main.png" width={500} height={500} />
      </div>
    </div>
  );
}
