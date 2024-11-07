import Image from "next/image";
import styles from "./single-user.module.css";

const SingleUser = async () => {
  // const {id} = params
  // const user = await fetchUser(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {"user.username"}
      </div>
      <div className={styles.formContainer}>
        <form action={"updateUser"} className={styles.form}>
          <input type="hidden" name="id" value={"user.id"} />
          <label>Username</label>
          <input type="text" name="username" placeholder={"user.username"} />
          <label>Email</label>
          <input type="email" name="email" placeholder={"user.email"} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="tel" name="phone" placeholder={"user.phone"} />
          <label>Address</label>
          <textarea itemType="address" name="address" placeholder={"user.address"} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={"true"} selected>
              Yes
            </option>
            <option value={"false"} selected>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={"true"} selected>
              Yes
            </option>
            <option value={"false"} selected>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
