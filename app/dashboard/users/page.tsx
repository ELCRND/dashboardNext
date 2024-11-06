import Rightbar from "@/app/components/Dashboard/Rightbar/Rightbar";
import styles from "./users.module.css";

import Chart from "@/app/components/Dashboard/Chart/Chart";
import Card from "@/app/components/Dashboard/Card/Card";
import Transaction from "@/app/components/Dashboard/Transaction/Transaction";

const UsersPage = () => {
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

export default UsersPage;
