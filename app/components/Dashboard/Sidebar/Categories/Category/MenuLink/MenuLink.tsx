"use client";
import Link from "next/link";
import { Item } from "../../../data";

import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ title, Icon, path }: Item["list"][0]) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      <Icon />
      {title}
    </Link>
  );
};

export default MenuLink;
