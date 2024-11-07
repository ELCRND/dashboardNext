import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button disabled={true}>Prev</button>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
