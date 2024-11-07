import styles from "./add-user.module.css";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action="">
        <input type="text" placeholder="username" name="username" required />
        <input type="text" placeholder="qemail" name="qemail" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="tel" placeholder="phone" name="titphone" required />
        <select name="isAdmin" id="isAdmin">
          <option value="false" selected>
            Is Admin?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="true" selected>
            Is Active?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea name="address" id="address" rows={16} placeholder="Address"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
