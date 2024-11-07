import Link from "next/link";
import Search from "./Search/Search";
import styles from "./users.module.css";
import Image from "next/image";
import Pagination from "./Pagination/Pagination";

const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href={"users/add"}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src={"/noavatar.png"} alt="" width={40} height={40} />
                <span>John Doe</span>
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>13.01.2022</td>
            <td>Admin</td>
            <td>active</td>
            <td className={styles.buttons}>
              <Link href={"/"}>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Users;
