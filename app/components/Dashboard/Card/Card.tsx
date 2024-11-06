import { IoPeopleCircle } from "react-icons/io5";

import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <IoPeopleCircle size={24} />
      <div className={styles.text}>
        <h2 className={styles.title}>Total Users</h2>
        <span className={styles.quant}>10.273</span>
        <span className={styles.detail}>
          <span className={styles.positive}> 12%</span> more than peoples
        </span>
      </div>
    </div>
  );
};

export default Card;
