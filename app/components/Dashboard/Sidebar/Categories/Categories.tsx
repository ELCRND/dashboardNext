"use client";
import { Item, menuItems } from "../data";
import Category from "./Category/Category";
import styles from "./categories.module.css";

const Categories = () => {
  return (
    <ul className={styles.categories}>
      {menuItems.map((item: Item) => {
        return <Category key={item.title} item={item} />;
      })}
    </ul>
  );
};

export default Categories;
