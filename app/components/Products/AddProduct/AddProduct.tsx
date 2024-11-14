import { addProduct } from "@/app/lib/actions";
import styles from "./add-product.module.css";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addProduct}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat" required>
          <option value="general" disabled>
            Choose a Category
          </option>
          <option value="kitchen">kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" required />
        <input type="text" placeholder="size" name="size" required />
        <textarea
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description"
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
