import Link from "next/link";
import Search from "../Users/Search/Search";
import styles from "./products.module.css";
import Image from "next/image";
import Pagination from "../Users/Pagination/Pagination";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href={"products/add"}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src={"/noproduct.jpg"} alt="" width={40} height={40} />
                <span>IPhone</span>
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>72</td>
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

export default Products;
