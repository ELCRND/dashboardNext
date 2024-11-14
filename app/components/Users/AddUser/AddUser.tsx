import { addUser } from "@/app/lib/actions";
import styles from "./add-user.module.css";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addUser}>
        <input type="text" placeholder="username" name="username" required />
        <input type="text" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="tel" placeholder="phone" name="phone" required />
        <select name="isAdmin" id="isAdmin" defaultValue={"default"} required>
          <option value="default" disabled>
            Is Admin?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isActive" id="isActive" defaultValue={"default"} required>
          <option value="default" disabled>
            Is Active?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address"
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
