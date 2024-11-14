import { updateProduct } from "@/app/lib/actions";
import styles from "./single-product.module.css";
import Image from "next/image";

import { IProduct, ISearchParams } from "@/app/types";
import { getSingleProduct } from "@/app/lib/data";
const SingleProduct = async ({ params }: ISearchParams) => {
  const p = await params;
  const product: IProduct = await getSingleProduct(p?.id!);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price.toString()} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock.toString()} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <textarea itemType="text" name="size" placeholder={product.size} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value=""></option>
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows={10} placeholder={product.desc}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
