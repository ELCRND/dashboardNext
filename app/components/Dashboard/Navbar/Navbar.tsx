"use client";
import { FaSearch } from "react-icons/fa";
import { IoNotifications, IoChatboxEllipses } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{pathName.split("/").pop()}</h1>
      <div className={styles.menu}>
        <div className={styles.search}>
          <FaSearch size={14} />
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.icons}>
          <IoChatboxEllipses size={22} />
          <IoNotifications size={22} />
          <FaEarthAmericas size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
