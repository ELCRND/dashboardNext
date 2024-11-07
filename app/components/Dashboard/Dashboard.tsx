import Card from "./Card/Card";
import Chart from "./Chart/Chart";
import Rightbar from "./Rightbar/Rightbar";
import Transaction from "./Transaction/Transaction";
import styles from "./dashboard.module.css";

const Dasboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>

        <Transaction />
        <Chart />
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dasboard;
