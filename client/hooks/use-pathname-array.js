"use client";
import { usePathname } from "next/navigation";
/**
 * return pathnames split with /
 * e.g /shop/womens-clothing => ["", "shop", "womens-clothing"]
 * @returns {string[]}
 */
const usePathnameArray = () => {
  const pathname = usePathname();
  return pathname.split("/");
};

export default usePathnameArray;
