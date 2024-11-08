import styles from "./add-product.module.css";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action="">
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea name="desc" id="desc" rows={16} placeholder="Description"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
