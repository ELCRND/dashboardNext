import Link from "next/link";
import Search from "../Users/Search/Search";
import styles from "./products.module.css";
import Image from "next/image";
import Pagination from "../Users/Pagination/Pagination";
import { fetchProducts } from "@/app/lib/data";
import { IProduct, ISearchParams } from "@/app/types";
import { removeProduct } from "@/app/lib/actions";

const Products = async ({ searchParams }: ISearchParams) => {
  const params = await searchParams;
  const q = params?.q || "";
  const page = params?.page || "1";
  const { products, quantProducts } = await fetchProducts(q, page);
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
          {products.map((product: IProduct) => {
            return (
              <tr key={product.id}>
                <td>
                  <div className={styles.product}>
                    <Image src={"/noproduct.jpg"} alt="" width={40} height={40} />
                    <span>{product.title}</span>
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>${product.price}</td>
                <td>{product.createdAt.toString().slice(4, 16)}</td>
                <td>{product.stock}</td>
                <td className={styles.buttons}>
                  <Link href={`products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={removeProduct}>
                    <input type="hidden" name="id" defaultValue={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination max={quantProducts} />
    </div>
  );
};

export default Products;
