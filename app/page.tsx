import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return <Link href={"/login"}>Login</Link>;
}
