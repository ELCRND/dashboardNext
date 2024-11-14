import Link from "next/link";
import Image from "next/image";
import Search from "./Search/Search";
import styles from "./users.module.css";
import Pagination from "./Pagination/Pagination";
import { fetchUsers } from "@/app/lib/data";
import { ISearchParams, IUser } from "@/app/types";
import { removeUser } from "@/app/lib/actions";

const Users = async ({ searchParams }: ISearchParams) => {
  const params = await searchParams;
  const q = params?.q || "";
  const page = params?.page || "1";

  const { users, quantUsers } = await fetchUsers(q, page);
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
          {users.map((user: IUser) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    <Image src={"/noavatar.png"} alt="" width={40} height={40} />
                    <span>{user.username}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "admin" : "client"}</td>
                <td>{user.isActive ? "active" : "passive"}</td>
                <td className={styles.buttons}>
                  <Link href={`users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={removeUser}>
                    <input type="hidden" name="id" defaultValue={user.id} />
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
      <Pagination max={quantUsers} />
    </div>
  );
};

export default Users;
