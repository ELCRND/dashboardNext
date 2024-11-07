import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./rightbar.module.css";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={"/astronaut.png"} alt="" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h2 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h2>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis
            doloremque exercitationem explicabo rem!
          </p>
          <button className={styles.button}>
            <FaPlayCircle size={16} />
            <span>Watch</span>
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>Comin Soon</span>
          <h2 className={styles.title}>
            New server actions are avialable, partial pre-rendering is coming up!
          </h2>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis
            doloremque exercitationem explicabo rem!
          </p>
          <button className={styles.button}>
            <FaPlayCircle size={16} />
            <span>Learn</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
