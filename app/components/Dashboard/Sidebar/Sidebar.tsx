import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";

import { BiLogOut } from "react-icons/bi";

import Image from "next/image";
import Categories from "./Categories/Categories";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src={"/noavatar.png"} alt="" width={50} height={50} />
        <span>John Doe</span>
        <span>Administrator</span>
      </div>
      <Categories />

      <button>
        <BiLogOut size={20} />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default Sidebar;
