"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, Ref, useEffect, useRef } from "react";

const Search = ({ placeholder }: { placeholder: string }) => {
  const ref = useRef<NodeJS.Timeout | null>();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    clearInterval(ref.current as unknown as NodeJS.Timeout);

    ref.current = setTimeout(() => {
      if (e.target.value) {
        params.set("page", "1");
        params.set("q", e.target.value);
      } else params.delete("q");
      replace(`${pathname}?${params}`);
    }, 500);
  };

  useEffect(() => {
    replace(`${pathname}`);
  }, []);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} onChange={handleSearch} />
    </div>
  );
};

export default Search;
