"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ max }: { max: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const pageNum = searchParams.get("page") || 1;
  const { replace } = useRouter();

  const handleClick = (v: number) => {
    params.set("page", (+pageNum + v).toString());
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button onClick={() => handleClick(-1)} disabled={+pageNum <= 1}>
        Prev
      </button>
      <button onClick={() => handleClick(1)} disabled={+pageNum >= max / 5}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
