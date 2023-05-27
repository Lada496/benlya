"use client";
import { useSearchParams } from "next/navigation";

/**
 *
 * @param {string} query
 * @returns {string}
 */
const useGetSearchParams = (query) => {
  const searchParams = useSearchParams();
  return searchParams.get(query);
};

export default useGetSearchParams;
