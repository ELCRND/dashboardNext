import { Item } from "../../data";
import MenuLink from "./MenuLink/MenuLink";

import styles from "./category.module.css";

const Category = ({ item }: { item: Item }) => {
  return (
    <li className={styles.category}>
      <h2>{item.title}</h2>
      <ul className={styles.linkList}>
        {item.list.map((link: Item["list"][0]) => (
          <li key={link.title}>
            <MenuLink {...link} />
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Category;
