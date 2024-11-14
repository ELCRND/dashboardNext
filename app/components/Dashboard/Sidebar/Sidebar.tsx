import { BiLogOut } from "react-icons/bi";

import Image from "next/image";
import Categories from "./Categories/Categories";
import styles from "./sidebar.module.css";
import { auth, signOut } from "@/app/auth";
import { DefaultSession, Session } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      username: string;
      isAdmin: boolean;
    };
  }
}

const Sidebar = async () => {
  const session: Session | null = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src={"/noavatar.png"} alt="" width={50} height={50} />
        <span>{session?.user?.username}</span>
        <span>{session?.user?.isAdmin ? "Administrator" : "User"}</span>
      </div>
      <Categories />

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>
          <BiLogOut size={20} />
          <span>Log Out</span>
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
